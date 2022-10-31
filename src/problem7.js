function problem7(user, friends, visitors) {
  return solution(user, friends, visitors);
}
module.exports = problem7;

function solution(user, friends, visitors) {
  const userContainer = new UserContainer();
  userContainer.addUser(user);

  friends.forEach((friend) => {
    const [nameA, nameB] = friend;
    userContainer.addFriends(nameA, nameB);
  });

  userContainer.calcVisitors(visitors);
  userContainer.calcKnownPerson(user);

  const recommendation = userContainer.recommendUser(user);
  return recommendation;
}
/**
 *
 * 1. 사용자에 대해서 알려주는 어떤 객체가 필요로 하다. => User
 *  1. User에는 name, score, friends 프로퍼티가 필요로 하다.
 * 2. 사용자들을 한 곳에서 관리하는 방법이 필요할 것 같다 => UserContainer
 * 3. user의 함께 아는 친구를 어떻게 구할 수 있을까?
 *  1. friends 프로퍼티를 비교해서 서로 공통된 친구가 있는지 확인
 *  2. 확인된 경우 점수를 추가
 *  3. 너무 오래 걸리진 않을까? O(N*N)
 * 4. 이런 전략을 따른다 하더라도 생성된 user는 어떻게 관리할 수 있을것인가?
 * 5. 이미 친구인 경우에도 추천하지 않는다는 숨겨진 조항이 있는 것 같다.
 */

class User {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.friends = [];
  }
  addFriend(name) {
    this.friends.push(name);
  }
  addScore(score) {
    this.score += score;
  }
}

class UserContainer {
  constructor() {
    this.container = {};
  }
  addUser(name) {
    if (!this.container[name]) this.container[name] = new User(name);
  }
  addFriends(nameA, nameB) {
    this.addUser(nameA);
    this.addUser(nameB);
    this.container[nameA].addFriend(nameB);
    this.container[nameB].addFriend(nameA);
  }
  calcVisitors(visitors) {
    visitors.forEach((visitor) => {
      this.addUser(visitor);
      this.container[visitor].addScore(1);
    });
  }
  calcKnownPerson(pivotName) {
    const pivotUser = this.container[pivotName];
    const userNames = Object.keys(this.container);

    userNames.forEach((userName) => {
      if (userName === pivotName) return;

      const user = this.container[userName];

      const pivotFriends = pivotUser.friends;
      const userFriends = user.friends;

      for (let i = 0; i < pivotFriends.length; i++) {
        for (let j = 0; j < userFriends.length; j++) {
          const pFriend = pivotFriends[i];
          const uFriend = userFriends[i];
          if (pFriend === uFriend) {
            user.addScore(10);
            break;
          }
        }
      }
    });
  }
  recommendUser(pivotUserName) {
    const users = Object.values(this.container);
    // 유저들을 점수 순대로 정리
    users.sort((a, b) => {
      if (a.score !== b.score) return b.score - a.score;
      else return;
    });
    // 만약 자기 자신이나 이미 친구인 사이라면 추천 목록에서 제거
    const recommendation = users
      .filter((user) => {
        if (user.name === pivotUserName) return false;
        if (user.friends.includes(pivotUserName)) return false;
        return true;
      })
      .map((user) => user.name);
    // 길이가 5 초과일 경우 제거
    if (recommendation.length > 5) recommendation.length = 5;
    return recommendation;
  }
}
