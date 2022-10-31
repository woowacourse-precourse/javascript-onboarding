function problem1(pobi, crong) {
  var answer = solution(pobi, crong);
  return answer;
}

function solution(pobi, crong) {
  if (!checkValid(pobi) || !checkValid(crong)) {
    return -1;
  }
  


  return null;
}

function checkValid(array) {
  return array[0]+1 == array[1];
}



function compareNum(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

module.exports = problem1;
