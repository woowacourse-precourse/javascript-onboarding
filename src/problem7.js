/**
 * 기능 목록
 * 1. user, friends, visitor 데이터를 입력 받는다.
 * 2. friends 배열에서 user 가 포함된 배열을 찾아 myFriends 배열에 추가하고, friends 배열에서 제거한다.
 * 3. friends 배열에서 myFriends 데이터가 포함되어 있는 배열을 찾는다.
 *   3-1. 아이디 A가 myFriends에 존재하고 Map 객체 키값에 아이디 B가 없으면 Map 객체에 (아이디 B, 10)을 저장한다.
 *   3-2. 아이디 A가 myFriends에 존재하고 Map 객체 키값에 아이디 B가 있으면 value에 10을 추가한다.
 *   3-3. 아이디 B가 myFriends에 존재하고 Map 객체 키값에 아이디 A가 없으면 Map 객체에 (아이디 A, 10)을 저장한다.
 *   3-4. 아이디 B가 myFriends에 존재하고 Map 객체 키값에 아이디 A가 있으면 value에 10을 추가한다.
 * 4. visitors 배열을 순회한다.
 *   4-1. 아이디가 Map 객체 키값에 존재하면 value에 1을 추가한다.
 *   4-2. 아이디가 Map 객체 키값에 존재하지 않고 myFriends 에 존재하지 않으면 Map 객체에 (아이디, 1)을 저장한다.
 *   4-3. 아이디가 myFriends 에 존재하면 패스
 * 5. Map 객체를 이름 순으로 정렬한다.
 * 6. Map 객체를 점수 순으로 정렬한다.
 * 7. Map 객체의 key 값을 순서대로 result 배열에 추가한다.
 * 8. result 배열의 크기가 5이하가 되도록 자른 후 return 한다.
 */

class Recommend {
  POINT = {
    OTHERS_FRIEND: 10,
    VISITOR: 1,
  };
  constructor(user) {
    this.user = user;
    this.myFriends = [];
    this.point = new Map();
  }
  getPoint() {
    return [...this.point]
      .sort()
      .sort((a, b) => b[1] - a[1])
      .map((data) => data[0])
      .slice(0, 5);
  }
  setPoint(key, point) {
    if (this.point.has(key)) {
      this.point.set(key, this.point.get(key) + point);
    } else {
      this.point.set(key, point);
    }
  }
  classifyNotMyFriends(friends) {
    const othersFriends = friends.filter((friend) => {
      if (friend[0] === this.user) {
        this.myFriends.push(friend[1]);
        return false;
      }
      if (friend[1] === this.user) {
        this.myFriends.push(friend[0]);
        return false;
      }
      return true;
    });
    return othersFriends;
  }
  setOtherFriendsPoint(othersFriends) {
    othersFriends.forEach((friend) => {
      const [first, second] = friend;
      if (this.myFriends.includes(first)) {
        this.setPoint(second, this.POINT.OTHERS_FRIEND);
      }
      if (this.myFriends.includes(second)) {
        this.setPoint(first, this.POINT.OTHERS_FRIEND);
      }
    });
  }
  setVisitorsPoint(visitors) {
    visitors.forEach((visitor) => {
      if (!this.myFriends.includes(visitor)) {
        this.setPoint(visitor, this.POINT.VISITOR);
      }
    });
  }
}

/**
 * @param {string} user
 * @param {[string, string][]} friends
 * @param {string[]} visitors
 * @returns {string[]} result
 */
function problem7(user, friends, visitors) {
  const recommend = new Recommend(user);
  const othersFriends = recommend.classifyNotMyFriends(friends);
  recommend.setOtherFriendsPoint(othersFriends);
  recommend.setVisitorsPoint(visitors);
  return recommend.getPoint();
}

module.exports = problem7;
