function problem7(user, friends, visitors) {
  // 추천친구 결과 result
  var answer = [];
  // 추천 친구와 점수 포함하는 object를 담는 array
  const scoreArr = [];
  // 추천 친구 이름 담는 배열
  const nameArr = [];
  // 현재 친구인 user 이름 담는 array
  const friendsArr = [];

  // 함께 아는 친구 점수 계산
  for (let i = 0; i < friends.length; i++) {
    // 현재 친구인 user 이름 추가
    if (friendsArr.indexOf(friends[i][0]) === -1)
      friendsArr.push(friends[i][0]);
    // 추천 친구에 이미 존재하는 경우
    if (nameArr.indexOf(friends[i][1]) !== -1) {
      // 점수 10점 추가
      scoreArr.map((item) => {
        if (item.name === friends[i][1]) item.score += 10;
      });
    }
    // 친구의 친구가 나 자신인 경우 제외
    else if (friends[i][1] !== user) {
      scoreArr.push({ score: 10, name: friends[i][1] });
      nameArr.push(friends[i][1]);
    }
  }

  return answer;
}

module.exports = problem7;
