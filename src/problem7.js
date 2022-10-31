function problem7(user, friends, visitors) {
  let answer;
  const scoreObject = {};
  const scoreListKeyArray = new Set();
  let userFriendShipArray = [];

  for (let friend of friends.flat()) {
    scoreListKeyArray.add(friend);
  }

  createScoreObj(scoreListKeyArray, scoreObject);
  findFiendOfFriend(userFriendShipArray, friends, user);
  userFriendShipArray = userFriendShipArray.flat().filter((item) => item !== user);
  addVisitorScore(visitors, scoreObject);

  console.log(userFriendShipArray);
  return answer;
}

const createScoreObj = (scoreKeySet, scoreObj) => {
  for (let item of scoreKeySet) {
    scoreObj[item] = 0;
  }
  return scoreObj;
};

const findFiendOfFriend = (userFriendArray, friends, user) => {
  for (let friend of friends) {
    if (friend.includes(user)) userFriendArray.push(friend);
  }
};

const addVisitorScore = (visitors, scoreObj) => {
  for (let visitor of visitors) {
    scoreObj[visitor] = (scoreObj[visitor] || 0) + 1;
  }
  console.log(scoreObj);
};

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
