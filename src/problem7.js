function problem7(user, friends, visitors) {
  var answer;
  let friendList = makeList(friends);
  friendList = calculateMarks(friendList, user, visitors);
  friendList = cutOffProcedure(friendList, user);
  answer = sortList(friendList);
  return answer;
}

const makeList = (friends) => {
  let obj = {};
  for (let i = 0; i < friends.length; i++) {
    if (!obj[friends[i][0]]) {
      obj[friends[i][0]] = [new Set(), 0];
    }
    if (!obj[friends[i][1]]) {
      obj[friends[i][1]] = [new Set(), 0];
    }
    obj[friends[i][0]][0].add(friends[i][1]);
    obj[friends[i][1]][0].add(friends[i][0]);
  }
  return obj;
};
const calculateMarks = (friendList, user, visitors) => {
  for (let friend in friendList) {
    let score =
      [...friendList[user][0]].filter((el) => friendList[friend][0].has(el))
        .length * 10;
    friendList[friend][1] = score;
  }
  for (let el of visitors) {
    if (!friendList[el]) {
      friendList[el] = ['uu', 0];
    }
    friendList[el][1]++;
  }
  return friendList;
};
const cutOffProcedure = (friendList, user) => {
  for (let el of friendList[user][0]) {
    delete friendList[el];
  }
  for (let el in friendList) {
    if (!friendList[el][1]) {
      delete friendList[el];
    }
  }
  delete friendList[user];
  return friendList;
};
const sortList = (friendList) => {
  const result = [];
  const sort = Object.entries(friendList)
    .sort(([, [, a]], [, [, b]]) => b - a)
    .sort(([c, [, a]], [d, [, b]]) => {
      if (a === b) {
        return d > c ? -1 : 1;
      }
    });
  for (let i = 0; i < sort.length; i++) {
    result.push(sort[i][0]);
    if (result.length >= 5) {
      break;
    }
  }
  return result;
};

module.exports = problem7;
