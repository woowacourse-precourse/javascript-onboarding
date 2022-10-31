function problem7(user, friends, visitors) {
  //유저 친구를 담을 배열
  let userFriend = [];
  //친구 점수를 담을 객체
  let friendScore = {};
  //friends 배열에서 사용자와 친구인 닉네임 찾기
  friends.map((item) => {
    if (item.includes(user)) {
      //friends 배열 아이템 중에 user 이름이 포함된 경우
      if (item[0] === user) {
        //그 중 첫 번째 아이템이 user이면 두 번째 아이템을 userFriend에 추가
        userFriend.push(item[1]);
      } else {
        userFriend.push(item[0]);
      }
    }
  });
  //유저 친구의 친구에게 10점 부여
  friends.map((item) => {
    userFriend.map((friend) => {
      if (item.includes(friend) && !item.includes(user)) {
        if (item[0] === friend && !userFriend.includes(item[1])) {
          //이미 친구이면 점수 부여X
          if (!friendScore[item[1]]) {
            friendScore[item[1]] = 10;
          } else {
            friendScore[item[1]] += 10;
          }
        } else if (item[1] === friend && !userFriend.includes(item[0])) {
          if (!friendScore[item[0]]) {
            friendScore[item[0]] = 10;
          } else {
            friendScore[item[0]] += 10;
          }
        }
      }
    });
  });
  //방문한 횟수에 따른 점수 1점 부여
  visitors.map((name) => {
    if (!userFriend.includes(name)) {
      //이미 친구이면 점수 부여X
      if (!friendScore[name]) {
        //아직 객체에 없으면 1로 초기화
        friendScore[name] = 1;
      } else {
        //객체에 있으면 +1
        friendScore[name] += 1;
      }
    }
  });
  return Object.keys(friendScore);
}

module.exports = problem7;
