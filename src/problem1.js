function problem1(pobi, crong) {
  var answer = solution(pobi, crong);
  return answer;
}

function hasException(person) {
  let leftNum = person[0];
  let rightNum = person[1];
  if (leftNum % 2 === 0) return true;
  if (Math.min(leftNum, rightNum) <= 2) return true;
  if (Math.max(leftNum, rightNum) >= 400) return true;
  if (leftNum + 1 !== rightNum) return true;
  return false;
}

function getMaxScore(arr) {
  let oddNum = arr[0].toString().split("").map(Number);
  let evenNum = arr[1].toString().split("").map(Number);
  let oddNumPlus = oddNum.reduce((acc, curr) => acc + curr, 0);
  let oddNumMulty = oddNum.reduce((acc, curr) => acc * curr, 1);
  let evenNumPlus = evenNum.reduce((acc, curr) => acc + curr, 0);
  let evenNumMulty = evenNum.reduce((acc, curr) => acc * curr, 1);
  return Math.max(oddNumPlus, oddNumMulty, evenNumPlus, evenNumMulty)
}

function solution(pobi, crong) {
  let pobiScore = getMaxScore(pobi);
  let crongScore = getMaxScore(crong);
  if(hasException(pobi) || hasException(crong)) return -1;
  if(pobiScore > crongScore) {
    answer = 1;
  } else if(pobiScore < crongScore) {
    answer = 2;
  } else if(pobiScore === crongScore) {
    answer = 0;
  } return answer;
}
module.exports = problem1;