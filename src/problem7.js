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

// user의 친구배열을 반환하는 함수
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

// user와 친구가 아닌 친구의 친구 배열을 반환하는 함수
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

// 방문자 배열에서 중복값과 user의 친구를 제거한 배열을 반환하는 함수
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

// 중복제거된 방문자 배열과 친구의 친구배열을 합쳐 배열에
// 담아 친구 추천 후보를 반환하는 함수
function makeCombinedArr(friends, visitors) {
  const notUserFriendsArr = findNotUserfriends(friends);
  const visitorsArr = deleteDuplicatesVisitorArray(friends, visitors);
  let combindedArr = [...notUserFriendsArr, ...visitorsArr];

  return combindedArr;
}

// 친구 추천 후보 배열을 받아 친구의 친구 배열을 기준으로 점수를 측정하는 함수
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
// 친구 추천 후보 배열을 받아 방문자 배열을 기준으로 점수를 측정하는 함수
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

// 입력받은 이중 배열을 오름차순으로 정리하는 함수
function DuplicatedArrayToDesending(array) {
  return array.sort((a, b) => b[1] - a[1]);
}

// 측정한 점수가 담긴 이중배열을 받아 오름 차순으로 정돈 후
// 조건에 따라 순차적으로 이름 배열을 반환하는 함수
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
