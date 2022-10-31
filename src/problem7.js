// #1
// 처음에 문제를 이해하는데 조금 시간이 걸렸던것같다. 10점을 주는 상황이 mrko 친구의 친구들에게 주는 것인가 헷갈렸었다
// 조금 더 보기 쉽고 이해가기 쉬운 로직으로 작성하려고 하다보니 코드를 쓰는 시간이 오래 걸렸다, 테스트 보면 이렇게 할 수 있을까 싶다.

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
    //점수 내림차순 정렬
    if (aScore !== bScore) {
      return bScore - aScore;
    }
    //이름 오름차순 정렬
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
/**
 * 함께 아는 친구 목록으로 점수 체크.
 *
 * @param {*} user 친구추천 받을 유저
 * @param {*} friendGraph 친구가 있는 모든 유저들의 친구 목록을 가진 데이터
 * @param {*} scoreBoard 친구추천 점수를 기록할 객체
 */
function calcRecommendScoreWithGraph(user, friendGraph, scoreBoard) {
  const userFriendList = friendGraph[user];

  // 전체 유저들 대상 loop, 유저 본인 스코어보드에서 삭제
  for (let checkUser in scoreBoard) {
    if (checkUser === user) {
      delete scoreBoard[user];
      continue;
    }

    const checkUserFriendList = friendGraph[checkUser] || [];
    //checkuser의 친구목록에 user의 친구가 있는가?
    //userFriendList 목록을 순회해서, checkUser, checkUserFriendList에 포함되는지 체크
    if (userFriendList.includes(checkUser)) {
      delete scoreBoard[checkUser];
      continue;
    }

    //유저 친구목록을 순회, 체크유저의 친구가 포함되어있는지 체크,
    for (let userFriend of userFriendList) {
      if (checkUserFriendList.includes(userFriend)) scoreBoard[checkUser] += 10;
    }
  }
}

/**
 * 방문자 목록으로 점수 체크.
 *
 * @param {*} user 방문자 목록을 통해서 점수를 체크할 대상유저
 * @param {*} visitor 방문자 목록
 * @param {*} scoreBoard 친구추천 점수를 기록할 객체
 */
function calcRecommendScoreWithVisitor(user, visitor, scoreBoard) {
  if (scoreBoard[user]) delete scoreBoard[user];
  for (let visit of visitor) {
    scoreBoard[visit] += 1;
  }
}
/**
 * 친구 목록으로 받은 값을 통해서, 친구가 있는 모든 유저들의 친구 리스트를 정리.
 *
 *
 * @param {[user: string , user : string]]} friends [유저이름, 유저이름] 의 배열을 파라미터로 받는다
 * @returns {[key in string]:[user[]]} friendGraph 한명의 유저를 키값으로 하고, 그 유저의 친구 목록을 밸류에 담은 객체 리턴
 */
function setFriendsGraph(friends) {
  const friendGraph = {};
  //userA와 userB에 대해 서로 친구 목록에 추가,
  for (let i = 0; i < friends.length; i++) {
    const [userA, userB] = friends[i];
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

module.exports = problem7;
