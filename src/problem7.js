const SnsFriendRecomander = {
  user: "",
  friends: [],
  visitors: [],
  relations: {},
  scores: {},
  inputDatas: function (user, friends, visitors) {
    if (this.checkDatas(user, friends, visitors)) {
      return false;
    }
    this.user = user;
    this.friends = friends;
    this.visitors = visitors;
    return true;
  },
  checkDatas: function (user, friends, visitors) {
    return (
      this.checkUserLength(user) &&
      this.checkFriendsLength(friends) &&
      this.checkVisitersLength(visitors) &&
      this.checkEnglish(user, ...friends, ...visitors)
    );
  },
  checkUserLength: function (user) {
    return user >= 1 && user <= 30;
  },
  checkFriendsLength: function (friends) {
    return friends.length >= 1 && friends.length <= 10000;
  },
  checkVisitersLength: function (visitors) {
    return visitors.length >= 0 && visitors.length <= 10000;
  },
  checkEnglish: function (...words) {
    return words.every((word) => /^[A-Za-z0-9]*$/.test(word));
  },
  makeRelations: function () {
    this.friends.forEach((friend) => {
      this.addRelation(friend[0], friend[1]);
      this.addRelation(friend[1], friend[0]);
    });
  },
  addScoreUser: function (user) {
    this.scores[user] = 0;
  },
  addRelation: function (one, two) {
    if (!(one in this.relations)) {
      this.relations[one] = [one];
      this.scores[one] = 0;
    }
    this.relations[one].push(two);
  },
  calculateScore: function () {
    for (const score in this.scores) {
      this.relations[score].forEach((other) => {
        if (!this.isRelationFriendWithUser(other, score)) {
          this.scores[score] += 10;
        }
      });
    }
    this.visitors.forEach((visitor) => {
      if (!(visitor in this.scores)) {
        this.addScoreUser(visitor);
      }
      this.scores[visitor] += 1;
    });
  },
  isRelationFriendWithUser: function (friend, noFriend) {
    return (
      this.relations[friend].includes[this.user] &&
      !this.relations[noFriend].includes[this.user]
    );
  },
  friendRecomander: function () {
    this.makeRelations();
    this.calculateScore();
    let scoresArray = Object.entries(this.scores);
    return scoresArray
      .sort((a, b) => {
        if (a[1] === b[1]) {
          return a[0] > b[0];
        }
        return b[1] - a[1];
      })
      .filter((score) => score[1] !== 0)
      .map((score) => score[0])
      .filter((other) => !this.relations[this.user].includes(other))
      .splice(0, 5);
  },
};

function problem7(user, friends, visitors) {
  const snsFriendRecomander = Object.assign({}, SnsFriendRecomander);
  snsFriendRecomander.inputDatas(user, friends, visitors);
  return snsFriendRecomander.friendRecomander();
}

module.exports = problem7;
