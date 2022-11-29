class RecommendSystem {
  constructor(user, friends, visitors) {
    this.user = user;
    this.friends = friends;
    this.visitors = visitors;
    this.info = {};
    this.score = {};
  }

  recommend() {
    this.info[this.user] = [];
    this.checkFriends();
    this.checkVisited();
    this.countScore();
    return this.getList();
  }

  checkFriends() {
    this.friends.forEach((info) => {
      const [userA, userB] = info;
      this.storeInfo(userA, userB);
    });
  }

  storeInfo(userA, userB) {
    if (this.isHaveInfo(this.info, userA))
      this.info[userA] = [...this.info[userA], userB];
    else this.info[userA] = [userB];
    if (this.isHaveInfo(this.info, userB))
      this.info[userB] = [...this.info[userB], userA];
    else this.info[userB] = [userA];
  }

  isHaveInfo(target, checkUser) {
    if (target[checkUser]) return true;
    if (!this.score[checkUser]) this.score[checkUser] = 0;
    return false;
  }

  checkVisited() {
    this.visitors.forEach((visitor) => {
      this.isHaveInfo(this.info, visitor);
      this.score[visitor] += 1;
    });
  }

  countScore() {
    const targetUser = this.getTargetUser(alreayFriends);
    targetUser.forEach((user) => {
      this.score[user] += 10;
    });
  }

  getTargetUser(alreayFriends) {
    const alreayFriends = this.info[this.user];
    const targetUser = [];
    alreayFriends.forEach((friend) => {
      targetUser.push(...this.info[friend]);
    });
    return targetUser;
  }

  getList() {
    const alreayFriends = this.info[this.user];
    const memberList = Object.keys(this.score).filter((user) => {
      if (user === this.user) return false;
      if (alreayFriends.includes(user)) return false;
      return true;
    });
    const sortedList = this.sortList(memberList);
    return this.cutList(sortedList);
  }

  sortList(memberList) {
    return memberList.sort((userA, userB) => {
      if (this.score[userB] - this.score[userA] === 0) {
        if (userA > userB) return 1;
        return -1;
      }
      return this.score[userB] - this.score[userA];
    });
  }

  cutList(list) {
    return list.slice(0, 5);
  }
}

function problem7(user, friends, visitors) {
  const recommendSystem = new RecommendSystem(user, friends, visitors);
  return recommendSystem.recommend();
}

module.exports = problem7;
