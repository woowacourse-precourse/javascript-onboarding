/*
기능 요구 사항

사용자와 함께 아는 친구의 수 = 10점
사용자의 타임 라인에 방문한 횟수 = 1점
최대 5명 return하기
0점인 경우 추천하지 않기

기능 목록

총 유저와 유저 수 구하기
유저마다 친구 리스트, 점수 만들기
유저 : [[친구 리스트], 점수]
미스터코의 친구의 친구에게 10점주기 (미스터코와 친구면 점수 X)
방문 유저들에게 1점씩 주기(미스터코와 친구면 점수 X)
유저, 점수 배열만들기
점수 내림차순으로 
최대 5명으로 0이 아닌경우에만 result 배열에 추가

프로그래밍 요구사항
Node.js 14 버전에서 실행 가능해야 한다.
순수 Vanilla JS로만 구현한다.
프로그램 종료 시 process.exit()를 호출하지 않는다.
프로그램 구현이 완료되면 ApplicationTest의 모든 테스트가 성공해야 한다.
프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

과제 진행 요구사항
미션은 javascript-onboarding 저장소를 Fork & Clone해 시작한다.
과제 진행 및 제출 방법은 프리코스 과제 제출 문서를 참고한다.
*/

function problem7(user, friends, visitors) {
  let userSet = new Set();
  friends.map((it) => userSet.add(it[0]).add(it[1]));
  visitors.map((it) => userSet.add(it));
  const userList = [...userSet];

  let adjList = {};

  for (let i = 0; i < userList.length; i++) {
    adjList[userList[i]] = [[], 0];
  }

  for (let i = 0; i < friends.length; i++) {
    adjList[friends[i][0]][0].push(friends[i][1]);
    adjList[friends[i][1]][0].push(friends[i][0]);
  }

  adjList["mrko"][0].map((it) => {
    adjList[it][0].map((it) => {
      if (it !== "mrko" && !adjList["mrko"][0].includes(it))
        adjList[it][1] += 10;
    });
  });

  visitors.map((it) => {
    if (!adjList["mrko"][0].includes(it)) adjList[it][1] += 1;
  });

  var sortList = [];
  for (var username in adjList) {
    sortList.push([username, adjList[username][1]]);
  }
  sortList.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else {
      return 1;
    }
  });

  let result = [];
  for (let i = 0; i < sortList.length && i < 5; i++) {
    if (sortList[i][1] != 0) {
      result.push(sortList[i][0]);
    }
  }
  return result;
}

module.exports = problem7;
