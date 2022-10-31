function problem7(user, friends, visitors) {
  var answer;

  return answer;
}

module.exports = problem7;

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
 *
 */

class User {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.friends = [];
  }
}
class UserContainer {
  constructor() {
    this.container = {};
  }
  addUser(name) {
    if (!this.container[name]) this.container[name] = new User(name);
  }
}
