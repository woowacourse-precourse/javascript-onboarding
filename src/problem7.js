/**
 * 사용자 이름과 사용자가 방문한 사람들의 이름을 저장하는
 * 간단한 용도의 클래스
 */
class User {

  /** @type {string} 사용자의 이름 */
  name

  /** @type {string[]} 사용자가 방문한 사람들의 이름 */
  visitors = []

  constructor(name, visitors) {
    this.name = name;
    this.visitors = visitors;
  }
}

/**
 * SNS 시스템을 나타낸 클래스이며 친구 관계 상태 유지,
 * 친구 관계로부터 점수를 계산하여 친구 추천 계산을 수행한다.
 */
class SocialNetwork {

  /** @type {Object.<string, string[]>} 친구 관계를 담는 변수 */
  #friendRelations = {}

  /**
   * `username` 의 친구를 추가하는 함수.
   * 단방향이기 때문에 친구 관계를 추가하려면 {@link addFriendRelation} 을 사용하여야 한다.
   * @param {string} username 사용자 이름
   * @param {string} friend 추가할 친구
   */
  #addFriend(username, friend) {
    if (!(username in this.#friendRelations)) {
      this.#friendRelations[username] = [];
    }
    this.#friendRelations[username].push(friend);
  }

  /**
   * 친구 관계를 추가하는 함수이며 서로의 친구 목록에 등록된다.
   * @param {string} friendA
   * @param {string} friendB
   */
  addFriendRelation(friendA, friendB) {
    this.#addFriend(friendA, friendB);
    this.#addFriend(friendB, friendA);
  }

  /**
   * 주어진 사용자의 친구 목록을 반환한다.
   * @param {string} username 사용자 이름
   * @returns {string[]} 사용자의 친구 목록
   */
  getFriends(username) {
    return this.#friendRelations[username] ?? [];
  }

  /**
   * 주어진 유저의 친구 관계, 타임 라인 방문에 따른 친구 추천을 계산한다.
   * 높은 점수를 획득한 순서로 정렬되어 반환된다.
   *
   * 다른 사용자의 타임 라인에 방문한 경우 +1점
   * 사용자와 함께 아는 친구는 +10점
   * @param {User} user 친구 추천을 생성할 사용자
   * @returns {string[]} 친구 추천 목록
   */
  getFriendRecommendations(user) {
    const scores = {};
    const addScore = (username, score) => {
      scores[username] = scores[username] ?? 0;
      scores[username] += score;
    };

    // 사용자의 타임 라인에 방문은 +1점
    user.visitors.forEach(username => addScore(username, 1));

    // 사용자와 함께 아는 친구는 +10점
    const friends = this.getFriends(user.name);
    for (const friend of friends) {
      this.getFriends(friend).forEach(_friend => addScore(_friend, 10));
    }

    // 본인과 친구들은 제외
    delete scores[user.name];
    friends.map(friend => delete scores[friend]);

    // 점수 순으로 정렬 및 상위 5개 잘라내기
    const friendRecommendations = Object.entries(scores)
      .sort(([usernameA, scoreA], [usernameB, scoreB]) => scoreB - scoreA || usernameA.localeCompare(usernameB))
      .slice(0, 5)
      .map(([username, score]) => username);

    return friendRecommendations;
  }
}

/**
 * 문제 7번의 입력인 사용자, 친구 관계, 방문 목록이 주어지면 사용자를 기준으로 하여
 * 추천하는 친구의 목록을 만들어 반환한다.
 * @param {*} name 사용자 이름
 * @param {*} friends 친구 관계 리스트
 * @param {*} visitors 사용자가 타임라인에 방문한 사람 목록
 * @returns {string[]} 추천하는 친구 목록
 */
function problem7(username, friends, visitors) {
  const user = new User(username, visitors);
  const socialNetwork = new SocialNetwork();

  friends.forEach(friendRelation => socialNetwork.addFriendRelation(...friendRelation));

  return socialNetwork.getFriendRecommendations(user);
}

module.exports = problem7;
