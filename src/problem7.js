const SnsFreindrRecomander = {
  user: "",
  freinds: [],
  visitors: [],
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
    return this.checkUserLength(user);
  },
  checkUserLength: function (user) {
    return user >= 1 && user <= 30;
  },
};

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
