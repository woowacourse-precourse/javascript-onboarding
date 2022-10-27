function problem1(pobi, crong) {
  var answer = solution(pobi, crong);
  return answer;
};
function exception(pobi, crong) {
  if( 
    pobi[0] % 2 == 0 || crong[0] % 2 == 0 ||
    Math.min(...pobi) <= 2 || Math.max(...pobi) >= 400 ||
    Math.min(...crong) <= 2 || Math.max(...crong) >= 400 ||
    pobi[0]+1 !== pobi[1] || crong[0]+1 !== crong[1]
  )   answer = false;
  else answer = true;
  return answer;
};
function makeMaxScore(arr) {
  oddNum = arr[0].toString().split("").map(Number);
  evenNum = arr[1].toString().split("").map(Number);
  let oddNumPlus = oddNum.reduce((a, b) => a + b, 0);
  let oddNumMulty = oddNum.reduce((a, b) => a * b, 1);
  let evenNumPlus = evenNum.reduce((a, b) => a + b, 0);
  let evenNumMulty = evenNum.reduce((a, b) => a * b, 1);
  let score = [oddNumPlus, oddNumMulty, evenNumPlus, evenNumMulty]
  return Math.max(...score)
};
function solution(pobi, crong) {
  pobiScore = makeMaxScore(pobi);
  crongScore = makeMaxScore(crong);
  checkException = exception(pobi,crong);
  if(checkException === false) {
      answer = -1;}
  if(pobiScore > crongScore && checkException !== false) {
      answer = 1;
  } else if(pobiScore < crongScore && checkException !== false) {
      answer = 2;
  } else if(pobiScore === crongScore && checkException !== false) {
      answer = 0;
  } return answer;
};
module.exports = problem1;