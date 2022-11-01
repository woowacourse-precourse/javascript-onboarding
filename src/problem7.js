function problem7(user, friends, visitors) {
  // 점수 리스트 뽑기 [이름, 점수]
  let friendList = [];

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (friends[i][j] !== user) {
        // console.log(friends[i][j]);
        friendList.push(friends[i][j]);
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    friendList.push(visitors[i]);
  }

  let friendSet = new Set(friendList); // 중복 제거
  friendList = Array.from(friendSet);
  // console.log(friendSet);
  // console.log("친구 리스트 : ", friendList);

  // 사용자와 함께 아는 친구의 수 * 10점
  // 사용자의 친구 리스트
  let userAndFriends = [];
  for (let i = 0; i <= friendList.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (friends[i][j] === user) {
        // console.log(i, j, friends[i]);
        userAndFriends.push(friends[i]);
      }
    }
  }

  let usersList = [];
  for (let i = 0; i < userAndFriends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (userAndFriends[i][j] !== user) {
        // console.log(i, j, friends[i]);
        usersList.push(userAndFriends[i][j]);
      }
    }
  }
  // console.log("유저의 친구 : ", usersList);

  // 친구 리스트에서 이미 친구인 사람 빼기
  let scoreList = [];

  for (let i = 0; i < friendList.length; i++) {
    if (usersList.includes(friendList[i]) === false) {
      scoreList.push([friendList[i], 0]);
    }
  }
  // console.log("추천 대상 명단 : ", scoreList);

  //  10점 플러스 명단
  let plusList = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1] !== user && usersList.includes(friends[i][0]) === true) {
      plusList.push(friends[i][1]);
    } else if (
      friends[i][0] !== user &&
      usersList.includes(friends[0][i]) === true
    ) {
      plusList.push(friends[i][0]);
    }
  }
  // console.log("10점 추가 명단 : ", plusList);

  // 10점 추가해주기
  for (let i = 0; i < plusList.length; i++) {
    for (let j = 0; j < scoreList.length; j++) {
      if (scoreList[j][0] === plusList[i]) {
        scoreList[j][1] += 10;
      }
    }
  }

  // 사용자의 타임라인에 방문한 횟수 * 1점
  for (let i = 0; i < visitors.length; i++) {
    for (let j = 0; j < scoreList.length; j++) {
      if (scoreList[j][0] === visitors[i]) {
        scoreList[j][1] += 1;
      }
    }
  }
  // console.log("최종 점수 : ", scoreList);

  // 점수 순 정렬
  // 점수 같으면, 이름 순 정렬
  scoreList = scoreList.sort(function (a, b) {
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] === b[1]) {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] < b[0]) {
        return 1;
      }
      return 0;
    }
  });

  let answer = [];
  for (let i = 0; i < scoreList.length; i++) {
    answer.push(scoreList[i][0]);
  }

  return answer;
}

module.exports = problem7;

// let user = "mrko";
// let friends = [
//   ["donut", "andole"],
//   ["donut", "jun"],
//   ["donut", "mrko"],
//   ["shakevan", "andole"],
//   ["shakevan", "jun"],
//   ["shakevan", "mrko"],
// ];
// let visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];

// console.log(
//   problem7(
//     "mrko",
//     [
//       ["donut", "andole"],
//       ["donut", "jun"],
//       ["donut", "mrko"],
//       ["shakevan", "andole"],
//       ["shakevan", "jun"],
//       ["shakevan", "mrko"],
//     ],
//     ["bedi", "bedi", "donut", "bedi", "shakevan"]
//   )
// );
