const user = "mrko";
const friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];
const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];

function findUserFriends(friends) {
  let userFriendsArr = [];

  friends.forEach((friendsArr) => {
    if (friendsArr[0] === user) {
      userFriendsArr.push(friendsArr[1]);
    }
    if (friendsArr[1] === user) {
      userFriendsArr.push(friendsArr[0]);
    }
  });

  return userFriendsArr;
}

function findNotUserfriends(friends) {
  const userFriendsArr = findUserFriends(friends);
  let notUserFriendsArr = [];

  friends.forEach((friendsArr) =>
    friendsArr.forEach((friend) => {
      if (
        userFriendsArr.includes(friend) === false &&
        friend !== user &&
        notUserFriendsArr.includes(friend) === false
      ) {
        notUserFriendsArr.push(friend);
      }
    })
  );

  return notUserFriendsArr;
}

function deleteDuplicatesVisitorArray(friends, visitors) {
  let visitorsArr = [];
  const userFriendsArr = findUserFriends(friends);

  visitors.forEach((visitor) => {
    if (
      visitorsArr.includes(visitor) === false &&
      userFriendsArr.includes(visitor) === false
    ) {
      visitorsArr.push(visitor);
    }
  });

  return visitorsArr;
}

function makeCombinedArr(friends, visitors) {
  const notUserFriendsArr = findNotUserfriends(friends);
  const visitorsArr = deleteDuplicatesVisitorArray(friends, visitors);
  let combindedArr = [...notUserFriendsArr, ...visitorsArr];

  return combindedArr;
}

function checkScoreFriendsOfFriends(friends, visitors) {
  const combinedArr = makeCombinedArr(friends, visitors);
  let map = new Map();

  combinedArr.forEach((friend) => {
    let i = 0;
    let count = 10;
    for (; i < friends.length; i++) {
      if (friends[i].includes(friend)) {
        map.set(friend, count);
        count = count + 10;
      }
    }
  });

  return map;
}

function checkSoreOfVisitor(friends, visitors) {
  const combinedArr = makeCombinedArr(friends, visitors);
  let map = checkScoreFriendsOfFriends(friends, visitors);

  combinedArr.forEach((friend) => {
    let i = 0;
    let count = 1;

    for (; i < visitors.length; i++) {
      if (visitors[i] === friend) {
        map.set(friend, count);
        count = count + 1;
      }
    }
  });

  return map;
}

function DuplicatedArrayToDesending(array) {
  return array.sort((a, b) => b[1] - a[1]);
}

function problem7(user, friends, visitors) {
  const friendsAndScoreArr = checkSoreOfVisitor(friends, visitors);
  let answerArr = DuplicatedArrayToDesending([...friendsAndScoreArr]);

  const answer = answerArr.map((recommendedfriend, index) => {
    if (recommendedfriend !== 0 && index < 5) {
      return recommendedfriend[0];
    }
  });

  return answer;
}
problem7(user, friends, visitors);

module.exports = problem7;
