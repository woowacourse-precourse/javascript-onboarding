function problem7(user, friends, visitors) {
  this.adjacent = new AdjacentList();
  for (let i = 0; i < friends.length; i++) {
    this.adjacent.add(friends[i][0], friends[i][1]);
    this.adjacent.add(friends[i][1], friends[i][0]);
  }
  this.adjacent.sort();

  const friendMap = this.adjacent.adjacentList;
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
  recommendList[10].sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());
  recommendList[1].sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());

  const answer = [...recommendList[10], ...recommendList[1]];
  return answer;
}

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

module.exports = problem7;
