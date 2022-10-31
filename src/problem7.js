function problem7(user, friends, visitors) {
  var answer;

  let score = {};

  //friends를 통해 닉네임 리스트(score)를 생성함
  for (i = 0; i < friends.length; i++) 
    score = updateScoreList(user, friends[i], score);
  delete (score[user]);

  return answer;
}

function updateScoreList(user, friends, score) {
  if (!Object.keys(score).some(value => value === friends[0]))   //score에 없다면
    score[friends[0]] = 0;
  if (!Object.keys(score).some(value => value === friends[1]))   //score에 없다면
    score[friends[1]] = 0;

  return score;
}
module.exports = problem7;

/*
1. 닉네임, 점수를 가진 객체배열 생성 score
2. 배열을 닉네임 기준으로 정렬
3. 사용자 친구를 찾아 배열 friendList에 저장
4. friendList에 있는 유저를 친구로 갖는 유저, 횟수를 담은 객체배열 linkedFriends
5. 횟수에 따라 객체배열 score 업데이트

6. visitors 배열에 따라 객체배열 score 업데이트

7. value기준으로 score 객체배열 정렬
8. value가 0인 부분부터 잘라내기
9. score의 닉네임 부분 차례로 출력
*/
