//유저의 점수를 분리해주는 함수
function scoreSplit(user,amount,index,array){
  array.push(Math.floor(user[index] / amount));
  user[index] = user[index] % amount;
}
}

module.exports = problem1;
