function problem7(user, friends, visitors) {
  let friendName = []; //이름만 담는 리스트를 만들었음
  const result = [];
  friends.forEach(function (item) {
    friendName.push(item[0]);
    friendName.push(item[1]);
  });
  friendName = friendName.filter(
    (item, pos) => friendName.indexOf(item) === pos
  ); //friends배열에 있는 사람의 이름을 다담고 중복을 제거해 한사람씩의 이름만 갖는 배열 생성

  let scoreFriend = []; // 점수,사람의 배열
  friendName.forEach(function (score) {
    scoreFriend.push([0, score]);
  }); //모든사람의 점수를 0으로 갖는 배열을 생성

  visitors.forEach(function (visitor) {
    //방문자 탐색 및 점수 부여
    if (friendName.includes(visitor)) {
      const friendIndex = friendName.indexOf(visitor);
      scoreFriend[friendIndex][0] += 1;
    } else {
      //방문자명단에는 있는데 점수,사람 배열에 없으면 1의값을 갖고 push
      friendName.push(visitor);
      scoreFriend.push([1, visitor]);
    }
  }); //visitor에게 점수 부여

  let userFriendName = [];

  friends.forEach(function (discovery) {
    if (discovery.includes(user)) {
      //friends 이중리스트 안에 use가 포함되어 있는지
      const discoveryIndex = discovery.indexOf(user);
      discovery.splice(discoveryIndex, 1);
      userFriend = discovery + ""; // user와 친구인 사람이름 문자열만 남기는 코드

      friends.forEach(function (plusScore) {
        if (plusScore.includes(userFriend)) {
          const plusScoreIndex = plusScore.indexOf(userFriend);
          plusScore.splice(plusScoreIndex, 1);
          if (plusScore + "" === "") {
          } else {
            userFriendFriend = plusScore + ""; //user의 친구와 친구추가 되있는사람
            const plusScoreIndex2 = friendName.indexOf(userFriendFriend);
            scoreFriend[plusScoreIndex2][0] += 10;
            userFriendName.push(userFriend);
          }
        }
      });
    }
  });
  userFriendName.sort();
  const set = new Set(userFriendName);
  userFriendName = [...set];

  scoreFriend = scoreFriend.filter(function (data) {
    return data[0] >= 0; //0점인사람 필터링
  });
  scoreFriend = scoreFriend.filter(function (data) {
    return data[1] !== user; //기존의 친구 필터링
  });
  for (i = 0; i < userFriendName.length; i++) {
    scoreFriend = scoreFriend.filter(function (data) {
      return data[1] !== userFriendName[i]; //기존의 친구 필터링
    });
  }

  //함수를 통한 정렬 점수,사람 배열에 점수를 먼저 비교, 같다면 이름 비교
  scoreFriend.sort(function (a, b) {
    if (a[0] < b[0]) {
      return 1;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    if (a[0] === b[0]) {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] < b[1]) {
        return 1;
      }
      return 0;
    }
  });

  //결과값의 길이가 5를 넘을 때 pop으로 작은 숫자들을 내보냄
  if (scoreFriend.length > 5) {
    for (i = 1; i <= scoreFriend.length - 5; i++) scoreFriend.pop();
  }
  scoreFriend.forEach(function (answer) {
    result.push(answer[1]);
  });
  console.log(scoreFriend);
  return result;
}

module.exports = problem7;

/*
console.log(Date.now());
a = [
  ["donut", "jun"],
  ["donut", "andole"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];
visit = ["bedi", "mrko", "donut", "bedi", "shakevan"];
problem7("mrko", a, visit);

console.log(Date.now());
*/
