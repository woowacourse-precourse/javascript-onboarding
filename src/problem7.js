function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

/**
 *
 * 1. 사용자에 대해서 알려주는 어떤 객체가 필요로 하다.
 * 2. 관계에 대해서 정의하는 adjacencyList가 필요로 할 것 같다.
 * 3. user의 함께 아는 친구를 어떻게 구할 수 있을까?
 *  1. friend 프로퍼티를 비교해서 서로 공통된 친구가 있는지 확인
 *  2. 확인된 경우 점수를 추가
 *  3. 너무 오래 걸리진 않을까? O(N*N)
 *
 */

class User {
  constructor(score) {
    this.score = score;
    this.friends = [];
  }
}
