function problem7(user, friends, visitors) {
  var answer;
  let user_following = [];
  let sns = new Set();
  sns.add(user);

  // user_following : user의 친구목록 
  for (let i = 0; i < friends.length; i++) {

      sns.add(friends[i][0])
      sns.add(friends[i][1])

      if (friends[i][1] === user) {
          user_following.push(friends[i][0])
      } else if (friends[i][0] === user) {
          user_following.push(friends[i][1])
      }
  }

  // sns 목록
  for (let i = 0; i < visitors.length; i++) {
      sns.add(visitors[i])
  }

  let sns_user = [...sns]
  let score = {}

  // 점수 배열로 초기화
  for (let i = 0; i < sns_user.length; i++) {
      score[sns_user[i]] = 0;
  }

  // 점수 1: 사용자와 함께 아는 친구의 수
  for (let i = 0; i < friends.length; i++) {
      if(friends[i][0] === user || friends[i][1] === user){
        continue;
      }

      if(sns_user.includes(friends[i][0])){
        score[friends[i][1]] += 10;
      }else if(sns_user.includes(friends[i][1])){
        score[friends[i][0]] += 10;
      }
  }

  // 점수 2: 사용자의 타임라인에 방문한 횟수
  for (let i = 0; i < visitors.length; i++) {
      if (!user_following.includes(visitors[i])) {
          score[visitors[i]] += 1;
      }
  }

  // 정렬
  return score;
}




module.exports = problem7;
