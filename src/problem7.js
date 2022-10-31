class Account {
  constructor(nickname) {
    this.nickname = nickname;
    this.friendList = new Map(); // key: friend, value: friends
    this.visitedList = new Map(); // key: friend, value: visited
  }

  addNewFriend(name, anotherFriend) {
    if (!this.friendList.get(name)) {
      this.friendList.set(name, [anotherFriend]);
      this.visitedList.set(name, 0);
    } else {
      this.friendList.set(name, [...this.friendList.get(name), anotherFriend]);
    }
  }

  visited(name) {
    !this.friendList.get(name) && this.friendList.set(name, []);
    this.visitedList.get(name) == undefined && this.visitedList.set(name, 0);
    this.visitedList.set(name, this.visitedList.get(name) + 1);
  }

  recommendAlgorithm() {
    let table = this.createScoreTable();
    this.calFriendShipScore(table);
    this.calVisitedScore(table);

    let scoreTable = [];
    Object.keys(table).forEach((friend) => {
      const { visitedScore, friendShipScore } = table[friend];
      scoreTable.push([
        friend,
        parseInt(visitedScore) + parseInt(friendShipScore),
      ]);
    });

    return scoreTable;
  }

  calFriendShipScore(scoreTable) {
    const myFriendList = this.friendList.get(this.nickname);
    for (let friendShip of this.friendList) {
      if (friendShip[0] === this.nickname) continue;
      myFriendList.forEach((myFriend) => {
        friendShip[1].includes(myFriend)
          ? (scoreTable[friendShip[0]].friendShipScore += 10)
          : null;
      });
    }
  }

  calVisitedScore(scoreTable) {
    for (let friend of this.visitedList) {
      scoreTable[friend[0]].visitedScore = friend[1];
    }
  }

  createScoreTable() {
    let scoreTable = {};
    for (let friend of this.friendList) {
      scoreTable[friend[0]] = { visitedScore: 0, friendShipScore: 0 };
    }
    return scoreTable;
  }
}

function problem7(user, friends, visitors) {
  const sns = new Account(user);
  friends.forEach((friend) => {
    const [friendA, friendB] = friend;
    sns.addNewFriend(friendA, friendB);
    sns.addNewFriend(friendB, friendA);
  });

  visitors.forEach((visitor) => {
    sns.visited(visitor);
  });

  const answer = sns
    .recommendAlgorithm()
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((table) => table[0]);
  return answer;
}

module.exports = problem7;
