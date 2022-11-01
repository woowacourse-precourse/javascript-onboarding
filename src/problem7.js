const createScoreObj = (scoreKeySet, scoreObj) => {
  for (let item of scoreKeySet) {
    scoreObj[item] = 0;
  }
  return scoreObj;
};

const findUserFriendShipArray = (friends, user, userFriendShipArray = []) => {
  for (let friend of friends) {
    if (friend.includes(user)) userFriendShipArray.push(friend);
  }

  return userFriendShipArray.flat().filter((item) => item !== user);
};

const addVisitorScore = (PureVisiotrs, scoreObj) => {
  for (let purevisitor of PureVisiotrs) {
    scoreObj[purevisitor] = (scoreObj[purevisitor] || 0) + 1;
  }
};

const addScoreListKey = (scoreListKeyArray, array) => {
  array.forEach((item) => scoreListKeyArray.add(item));
};

const findPureVisitor = (visitors, userFriendShipArray) => {
  for (let visitor of visitors) {
    for (let userFriendShip of userFriendShipArray) {
      if (visitor.includes(userFriendShip)) {
        visitors = visitors.filter((v) => v !== userFriendShip);
      }
    }
  }

  return visitors;
};

const make10ScoreArray = (expectUserFriendsArray, findUserFriendShipArray, score10PeopleArray = []) => {
  for (let expectUserFriend of expectUserFriendsArray) {
    for (let userFriendShip of findUserFriendShipArray) {
      if (expectUserFriend.includes(userFriendShip)) {
        score10PeopleArray.push(expectUserFriend);
        score10PeopleArray = score10PeopleArray.flat().filter((item) => item !== userFriendShip);
      }
    }
  }
  return score10PeopleArray;
};

const calculateScore10 = (score10PeopleArray, scoreObj) => {
  for (let score10People of score10PeopleArray) {
    if (scoreObj.hasOwnProperty(score10People)) scoreObj[score10People] += 10;
  }
};

const deleteScore0 = (scoreObj) => {
  const objKeys = Object.keys(scoreObj);
  objKeys.forEach((objKey) => {
    if (scoreObj[objKey] === 0) scoreObj[objKey].delete;
  });
};

function problem7(user, friends, visitors) {
  const scoreObject = {};
  const scoreListKeyArray = new Set();
  const expectUserFriendsArray = friends.filter((friend) => !friend.includes(user));

  make10ScoreArray(expectUserFriendsArray, findUserFriendShipArray(friends, user));

  addScoreListKey(scoreListKeyArray, findPureVisitor(visitors, findUserFriendShipArray(friends, user)));

  addScoreListKey(scoreListKeyArray, make10ScoreArray(expectUserFriendsArray, findUserFriendShipArray(friends, user)));

  createScoreObj(scoreListKeyArray, scoreObject);

  addVisitorScore(findPureVisitor(visitors, findUserFriendShipArray(friends, user)), scoreObject);

  calculateScore10(make10ScoreArray(expectUserFriendsArray, findUserFriendShipArray(friends, user)), scoreObject);

  deleteScore0(scoreObject);

  const sortScoreObj = Object.keys(scoreObject)
    .sort((a, b) => scoreObject[b] - scoreObject[a])
    .slice(0, 5);

  return sortScoreObj;
}

console.log(
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);

module.exports = problem7;
