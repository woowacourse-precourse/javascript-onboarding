//유저의 점수를 분리해주는 함수
function scoreSplit(user,amount,index,array){
  array.push(Math.floor(user[index] / amount));
  user[index] = user[index] % amount;
}

//유저의 가장 높은 점수를 판별하는 함수
function getBestScore(array, best){
  const plus = array.reduce((sum, cur) => sum + cur);
  const mul = array.reduce((sum, cur) => sum * cur);
  best = best < plus? plus : best;
  best = best < mul? mul : best;
  return best;
}

//유저의 점수를 계산하는 함수
function calculateScore(user){
  let best = 0; //최고 점수 
  for(let i = 0; i < user.length; i++){
    let array = [];
    //100점보다 큰경우 
    if (user[i] >= 100) {
      scoreSplit(user, 100, i, array);
    }
    scoreSplit(user, 10, i, array);
    scoreSplit(user, 1, i, array);
    //최고점수 판독 
    best = getBestScore(array, best);
  }
  return best;
}

//예외처리 함수
function check(user){
  //연속된 페이지가 아닌경우 / 첫페이지,마지막페이지를 펼치는 경우
  if ((user[1] - user[0] !== 1) || (user[0] <= 1)||(user[1] >= 400)) {
    return 1;
  }
  return 0;
}

//최종 점수 판별 함수
function getWinner(user1, user2){
  if (user1 > user2) {
  return 1;
  }
  if (user1 < user2) {
  return 2;
  }
  if (user1 === user2) {
  return 0;
  }  
}

//메인 함수
function problem1(pobi, crong){
  //예외처리
  if (check(pobi) || check(crong)) {
    return -1;
  }
  //유저 점수 계산
  const pobi_score = calculateScore(pobi);
  const crong_score = calculateScore(crong);

  //누가 이긴지 판별
  return getWinner(pobi_score, crong_score);
}

module.exports = problem1;
