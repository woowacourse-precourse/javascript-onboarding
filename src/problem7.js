class Account {
  constructor(nick) {
    this.nick = nick;
    this.fList = new Map(); 
    this.vList = new Map();
  }

  addFriend(name, aFriend) {
    if (!this.fList.get(name)) {
      this.fList.set(name, [aFriend]);
      this.vList.set(name, 0);
    } else {
      this.fList.set(name, [...this.fList.get(name), aFriend]); 
    }
  }

  visited(name) {
    !this.fList.get(name) && this.fList.set(name, []);
    this.vList.get(name) == undefined && this.vList.set(name, 0);
    this.vList.set(name, this.vList.get(name) + 1);
  }

  recomAlgorithm() {
    let table = this.createTable();
    this.calFriendScore(table);
    this.calVisitScore(table);

    let scoreTable = [];
    Object.keys(table).forEach((friend) => {
      const { visitScore, friendScore } = table[friend];
      scoreTable.push([
        friend,
        parseInt(visitScore) + parseInt(friendScore),
      ]);
    });

    return scoreTable;
  }

  calFriendScore(scoreTable) {
    const myFriendList = this.fList.get(this.nick);
    for (let friendShip of this.fList) {
      if (friendShip[0] === this.nick) continue;
      myFriendList.forEach((myFriend) => {
        friendShip[1].includes(myFriend)
          ? (scoreTable[friendShip[0]].friendScore += 10)
          : null;
      });
    }
  }

  calVisitScore(scoreTable) {
    for (let friend of this.vList) {
      scoreTable[friend[0]].visitScore = friend[1];
    }
  }

  createTable() {
    let scoreTable = {};
    for (let friend of this.fList) {
      scoreTable[friend[0]] = { visitScore: 0, friendScore: 0 };
    }
    return scoreTable;
  }
}

function problem7(user, friends, visitors) {
  const sns = new Account(user);
  friends.forEach((friend) => {
    const [friendA, friendB] = friend;
    sns.addFriend(friendA, friendB);
    sns.addFriend(friendB, friendA);
  });

  visitors.forEach((visitor) => {
    sns.visited(visitor);
  });

  const answer = sns
    .recomAlgorithm()
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((table) => table[0]);
  return answer;
}

module.exports = problem7;
