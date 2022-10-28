function problem7(user, friends, visitors) {
  var answer = [];
  let user_friends = [];
  let sns = new Set([]);
  let sns_users = [];
  let dic = {};
  let result = [];

  for (i = 0; i < friends.length; i++) {
    //유저의 친구 목록
    if (friends[i][0] === user) {
      user_friends.push(friends[i][1]);
    } else if (friends[i][1] === user) {
      user_friends.push(friends[i][0]);
    }
    //sns사용 유저 추가
    sns.add(friends[i][0]);
    sns.add(friends[i][1]);
  }

  for (i = 0; i < visitors.length; i++) {
    //sns 사용 유저 추가
    sns.add(visitors[i]);
  }
  //sns 사용자 목록을 배열로 변경
  sns_users = [...sns];

  //전부 0점으로 초기화
  for (i = 0; i < sns_users.length; i++) {
    dic[sns_users[i]] = 0;
  }

  for (i = 0; i < friends.length; i++) {
    if (friends[i][0] === user || friends[i][1] === user) {
      continue;
    }
    //user 친구와 친구인 경우 10점 추가
    if (user_friends.includes(friends[i][0])) {
      dic[friends[i][1]] += 10;
    } else if (user_friends.includes(friends[i][1])) {
      dic[friends[i][0]] += 10;
    }
  }

  for (i = 0; i < visitors.length; i++) {
    //유저의 친구도 아니고 유저도 아닐경우 +1
    if (!user_friends.includes(visitors[i]) && visitors[i] != user) {
      dic[visitors[i]] += 1;
    }
  }

  for (i = 0; i < sns_users.length; i++) {
    if (!user_friends.includes(sns_users[i]) && sns_users[i] != user) {
      if (dic[sns_users[i]] > 0) {
        result.push({ id: sns_users[i], score: dic[sns_users[i]] });
      }
    }
  }

  result.sort((a, b) => {
    //score기준 내림차순
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    // id기준 오름차순
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
  });

  //5개 까지만 출력
  for (i = 0; i < result.length; i++) {
    if (i == 5) {
      break;
    }
    answer.push(result[i].id);
  }

  console.log(answer);

  return answer;
}

module.exports = problem7;
