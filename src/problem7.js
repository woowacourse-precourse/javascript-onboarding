/**
 *
 * @param {*} user 친구추천 받을 유저
 * @param {*} friendGraph 친구가 있는 모든 유저들의 친구 목록을 가진 데이터
 * @param {*} scoreBoard 친구추천 점수를 기록할 객체
 */
function calcRecommendScoreWithGraph(user, friendGraph, scoreBoard) {
  const userFriendList = friendGraph[user];
  // console.log("현재유저, 친구목록", user, userFriendList);

  // 전체 유저들 대상 loop, 유저 본인 스코어보드에서 삭제
  for (let checkUser in scoreBoard) {
    if (checkUser === user) {
      delete scoreBoard[user];
      continue;
    }

    const checkUserFriendList = friendGraph[checkUser] || [];
    // console.log(
    //   "해당 유저의 친구목록을 조사할 예정 : ",
    //   checkUser,
    //   checkUserFriendList
    // );

    //checkuser의 친구목록에 user의 친구가 있는가?
    //userFriendList 목록을 순회해서, checkUser, checkUserFriendList에 포함되는지 체크
    if (userFriendList.includes(checkUser)) {
      delete scoreBoard[checkUser];
      continue;
    }

    for (let userFriend of userFriendList) {
      // console.log(
      //   "userFriend == checkUserFriend? : ",
      //   userFriend,
      //   checkUserFriendList,
      //   checkUserFriendList.includes(userFriend)
      // );
      if (checkUserFriendList.includes(userFriend)) scoreBoard[checkUser] += 10;
    }
  }
}

/**
 *
 * @param {*} user 방문자 목록을 통해서 점수를 체크할 대상유저
 * @param {*} visitor 방문자 목록
 * @param {*} scoreBoard 친구추천 점수를 기록할 객체
 */
function calcRecommendScoreWithVisitor(user, visitor, scoreBoard) {
  scoreBoard[user] = -1;
  for (let visit of visitor) {
    scoreBoard[visit] += 1;
  }
}
/**
 *
 * @param {[user: string , user : string]]} friends [유저이름, 유저이름] 의 배열을 파라미터로 받는다
 * @returns {[key in string]:[user[]]} friendGraph 한명의 유저를 키값으로 하고, 그 유저의 친구 목록을 밸류에 담은 객체 리턴
 */
function setFriendsGraph(friends) {
  const friendGraph = {};

  console.log(friends);

  for (let i = 0; i < friends.length; i++) {
    const [userA, userB] = friends[i];
    // console.log(
    //   "변화전",
    //   friends[i],
    //   userA,
    //   userB,
    //   friendGraph[userA],
    //   friendGraph[userB]
    // );
    if (!friendGraph[userA]) {
      friendGraph[userA] = [userB];
    } else {
      friendGraph[userA].push(userB);
    }
    if (!friendGraph[userB]) {
      friendGraph[userB] = [userA];
    } else {
      friendGraph[userB].push(userA);
    }
    // console.log("변화후", friendGraph[userA], friendGraph[userB]);
  }

  for (let user in friendGraph) {
    friendGraph[user] = friendGraph[user].filter(
      (friend, i, arr) => arr.indexOf(friend) === i
    );
  }

  return friendGraph;
}

/**
 * 점수 기록을 위해 먼저 전체 유저들에 대한 점수목록을 만든다
 *
 * @param {[userName:string, userName:string]} friends [userName, userName][]를 받는다.
 * @param {string[]} visitors [userName, userName...]을 받는다
 * @returns {{[key in userList]:0}} userList 본인 제외 모든 유저들 이름을 key값으로 하고, 밸류는 0으로 하는 객체 리턴
 */
function setScoreBoard(friendList, visitors) {
  const userListObj = {};
  const allUserData = friendList.flat().concat(visitors);
  allUserData.forEach((user) => {
    if (!userListObj[user]) userListObj[user] = 0;
  });

  return userListObj;
}

function problem7(user, friends, visitors) {
  var answer = [];

  //필요한 데이터 세팅
  const friendGraph = setFriendsGraph(friends);
  const scoreBoard = setScoreBoard(friends, visitors);

  //방문자 점수, 친구목록 점수 업데이트
  calcRecommendScoreWithVisitor(user, visitors, scoreBoard);
  calcRecommendScoreWithGraph(user, friendGraph, scoreBoard);

  //점수 내림차순, 이름순 오름차순 정렬
  const sortedScoreBoard = Object.entries(scoreBoard).sort((a, b) => {
    const [aUser, aScore] = a;
    const [bUser, bScore] = b;
    if (aScore !== bScore) {
      return bScore - aScore;
    }
    if (aUser < bUser) return -1;
    if (aUser > bUser) return 1;
    return 0;
  });

  //이름값만 answer에 담아서 리턴한다
  for (let i = 0; i < sortedScoreBoard.length; i++) {
    answer.push(sortedScoreBoard[i][0]);
  }

  return answer;
}

// problem7(
//   "mrko",
//   [
//     ["donut", "andole"],
//     ["donut", "jun"],
//     ["donut", "mrko"],
//     ["shakevan", "andole"],
//     ["shakevan", "jun"],
//     ["shakevan", "mrko"],
//   ],
//   ["bedi", "bedi", "donut", "bedi", "shakevan"]
// );
module.exports = problem7;
