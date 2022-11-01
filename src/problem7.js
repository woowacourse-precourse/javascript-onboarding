class AdjacentList {
  list = [];
  constructor() {}

  add(key, value) {
    let overlap = true;

    if (this.list.length > 0) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i][0] === key) {
          this.list[i].push(value);
          overlap = false;
        }
      }
      if (overlap) {
        this.list.push([key, value]);
      }
    } else {
      this.list.push([key, value]);
    }
  }

  sort() {
    this.adjacentList = new Map();
    for (const list of this.list) {
      const [key, ...value] = list;
      this.adjacentList.set(key, value);
    }
  }
}

/**
 *
 * @param {string} input
 * @returns 주어진 이름을 오름차순으로 정렬하는 함수
 */

function Sort(input) {
  input.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i][0] === input[i + 1][0]) {
      const length = input[i].length > input[i + 1].length ? input[i + 1].length : input[i].length;
      for (let j = 1; j < length; j++) {
        if (input[i][j] > input[i + 1][j]) {
          [input[i], input[i + 1]] = [input[i + 1], input[i]];
          break;
        }
      }
    }
  }
  return input;
}

/**
 *
 * @param {string} user
 * @param {Array} friends
 * @param {Array} visitors
 * @returns
 */

function problem7(user, friends, visitors) {
  const adjacent = new AdjacentList();
  for (let i = 0; i < friends.length; i++) {
    adjacent.add(friends[i][0], friends[i][1]);
    adjacent.add(friends[i][1], friends[i][0]);
  }
  adjacent.sort();

  const friendMap = adjacent.adjacentList;
  const notInvolved = [user, ...friendMap.get(user)];

  const recommendList = {
    10: [],
    1: [],
  };

  for (let i = 0; i < notInvolved.length; i++) {
    const connected = friendMap.get(notInvolved[i]);
    for (let j = 0; j < connected.length; j++) {
      if (!notInvolved.includes(connected[j])) {
        notInvolved.push(connected[j]);
        if (!recommendList[10].includes(connected[j])) {
          recommendList[10].push(connected[j]);
        }
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (!notInvolved.includes(visitors[i])) {
      notInvolved.push(visitors[i]);
      if (!recommendList[1].includes(visitors[i])) {
        recommendList[1].push(visitors[i]);
      }
    }
  }
  const tenScore = Sort(recommendList[10]);
  const oneScore = Sort(recommendList[1]);

  const answer = [...tenScore, ...oneScore];
  return answer;
}

module.exports = problem7;

// 인접리스트를 이용하여 주어진 user의 친구들과 연결된 사람들을 구분하여
// 문제를 해결하였습니다. 주어진 문제를 해결하기 위해서는 user의 친구들
// 이 어떻게 연결되었는지 파악하는 것이 중요하다 생각하여 인접리스트를
// 사용하였습니다.
