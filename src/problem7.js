const createScoreObj = (scoreKeySet, scoreObj) => {
  for (let item of scoreKeySet) {
    scoreObj[item] = 0;
  }
  return scoreObj;
};

const findUserFriendShip = (userFriendArray, friends, user) => {
  for (let friend of friends) {
    if (friend.includes(user)) userFriendArray.push(friend);
  }
  return userFriendArray;
};

const addVisitorScore = (visitors, scoreObj) => {
  for (let visitor of visitors) {
    scoreObj[visitor] = (scoreObj[visitor] || 0) + 1;
  }
};

function problem7(user, friends, visitors) {
  let answer;
  const scoreObject = {};
  const scoreListKeyArray = new Set();
  let userFriendShipArray = [];
  let expectUserFriendsArray = [];
  let score10PeopleArray = [];

  findUserFriendShip(userFriendShipArray, friends, user);

  userFriendShipArray = userFriendShipArray.flat().filter((item) => item !== user); // 프렌드쉽 필터해서 유저없앰

  expectUserFriendsArray = friends.filter((friend) => !friend.includes(user)); // 원래 친구 필터해서 유저 있는거 없앰

  // 방문자에서 유저 친구 빼고 순수 방문자
  for (let visitor of visitors) {
    for (userFriendShip of userFriendShipArray) {
      if (visitor.includes(userFriendShip)) {
        visitors = visitors.filter((v) => v !== userFriendShip);
      }
    }
  }

  //유저 없는 친구목록 에서 유저 친구 빼고 10점짜리목록만듦
  for (let expectUserFriend of expectUserFriendsArray) {
    for (let userFriendShip of userFriendShipArray) {
      if (expectUserFriend.includes(userFriendShip)) {
        score10PeopleArray.push(expectUserFriend);
        score10PeopleArray = score10PeopleArray.flat().filter((item) => item !== userFriendShip);
      }
    }
  }

  //여기서 만듦
  visitors.forEach((visitor) => scoreListKeyArray.add(visitor));
  score10PeopleArray.forEach((score10People) => scoreListKeyArray.add(score10People));

  createScoreObj(scoreListKeyArray, scoreObject);

  // 방문자 점수 산정
  addVisitorScore(visitors, scoreObject);

  //만들어진 스코어 오브젝트에 해당항목이있다면 10점씩 추가

  for (let score10People of score10PeopleArray) {
    if (scoreObject.hasOwnProperty(score10People)) scoreObject[score10People] += 10;
  }

  // 스코어 오브젝트 점수순으로 소팅

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
