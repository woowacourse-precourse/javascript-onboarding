function problem7(user, friends, visitors) {
  var answer = [];
  var userFriends = []; // 친구인 목록 
  var arr = [];

  //이미 친구와 아닌 배열 추가 (구분)
  for (var i = 0; i < friends.length; i++) {
    for (var j = 0; j < friends[i].length; j++) {
      if (friends[i].includes(user)) {
        userFriends.push(friends[i][j]);
      } else {
        arr.push(friends[i][j]);
      }
    }
  }

  // 이미 친구인 배열 유저 제거
  for (var i = 0; i < userFriends.length; i++) {
    if (userFriends[i] === user) {
      userFriends.splice(i, 1);
      i--;
    }
  }

  // 10점 배열에 이미 친구인 요소 제거
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < userFriends.length; j++) {
      if (arr[i].includes(userFriends[j])) {
        arr.splice(i, 1);
        j--;
      }
    }
  }
  arr.sort();

  // visitors에 배열에 user나 이미 친구인 요소 제거 후 배열 반환
  for (var i = 0; i < visitors.length; i++) {
    for (var j = 0; j < userFriends.length; j++) {
      if (visitors[i].includes(userFriends[j] || user)) {
        visitors.splice(i, 1);
        i--;
      }
    }
  }

  //이름 : 점수로 이루어진 객체를 생성하여 중복된 이름만큼 friends에 배열은 10점, visitors에 배열은 1점 씩 추가
  var result = {};
  arr.forEach((x) => {
    result[x] = (result[x] || 0) + 10;
  });
  visitors.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  })
  result = Object.entries(result).sort((a, b) => b[1] - a[1]);

  // 점수가 0점이라면 추가하지않는 예외사항
  for (var i = 0; i < result.length; i++) {
    if (result[i][1] != 0) {
      answer.push(result[i][0])
    }
  }

  // 최대 5개 까지의 배열만 받을수 있도록 설정
  if (answer.length > 5) {
    answer.slice(0,6);
  }
  return answer;
}

module.exports = problem7;
