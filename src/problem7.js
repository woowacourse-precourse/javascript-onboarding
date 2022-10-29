function problem7(user, friends, visitors) {
  // 사용자와 친구인 유저정보
  const myFriend = []

  // 함께 아는 친구의 유저
  const myFind = []

  // 친구 추천 점수
  const friendScore = [];

  // 정보저장
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1] === user) {
      // 나와 친구인 유저
      myFriend.push(friends[i][0])
    } else if (friends[i][1] !== user) {
      // 함께 아는 친구의 유저
      myFind.push(friends[i][1])
    }
  }

  // 사용자의 타임 라인 방문 기록을 남긴 유저정보 저장
  // 나와 친구인 유저는 제외(예외처리)
  const timeLine = visitors.filter(x => !myFriend.includes(x));

  // 함께 아는 친구의 유저 10점
  myFind.forEach((x) => {
    if (friendScore[x]) {
      friendScore[x] = friendScore[x] + 10
    } else {
      friendScore[x] = 10;
    }
  });

  // 사용자의 타임 라인 방문 유저 1점
  timeLine.forEach((x) => {
    if (friendScore[x]) {
      friendScore[x] = friendScore[x] + 1
    } else {
      friendScore[x] = 1;
    }
  });

  // [key, value] 쌍의 배열을 반환
  // 최대 5명을 return
  const result = Object.entries(friendScore).slice(0, 5)

  // 1. 점수가 높은 순으로 나열
  // 2. 동일 점수가 있을 경우 이름순으로 정렬
  result.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
  })
  console.log(result)

  const answer = []
  for (let i = 0; i < result.length; i++) {
    answer.push(result[i][0])
  }
  return answer
}

module.exports = problem7;
