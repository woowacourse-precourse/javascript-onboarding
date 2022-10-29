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
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
