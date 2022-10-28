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

}

module.exports = problem1;
