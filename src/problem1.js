function problem1(pobi, crong) {
  if (checkInputErr(pobi, crong)) return -1;

  const [pobiMax, crongMax] = findMaxScore(pobi, crong);
  if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else return 0;
}

function checkInputErr(pobi, crong) {

  const validType = () => Array.isArray(pobi) && Array.isArray(crong); //Type
  const validLength = () => pobi.length === 2 && crong.length === 2; //Length 
  const validRange = (array) => array.every(data => 1 <= data && data <= 400); //Range
  const validValue = (array) => (array[0] % 2 === 1) && (array[1] === array[0] + 1); //Input
  const validPage = (array) => (array[0] !== 1 && array[1] !== 2) && (array[0] !== 399 && array[1] !==400);

  if (!validType()) return true;
  else if (!validLength()) return true;
  else if (!validRange(pobi) || !validRange(crong)) return true;
  else if (!validValue(pobi) || !validValue(crong)) return true;
  else if (!validPage(pobi) || !validPage(crong)) return true;
  else return false;

}// Type, Range, Input ,Length check

function findMaxScore(pobi, crong) {
  const calMaxScore = (array) => {
    let max = -1;
    array.forEach(val => {
      const plusValue = calScore(val, "+");
      const multiValue = calScore(val, "*");

      max = Math.max(max, plusValue, multiValue);
    })

    return max;
  }

  const pobiMax = calMaxScore(pobi);
  const crongMax = calMaxScore(crong);

  return [pobiMax, crongMax];
} // 각배열에 로직에따라 최댓값 찾는 함수

function calScore(score, operator) {
  const scoreArray = [...score.toString()].map(Number);
  let value;
  switch (operator) {
    case "+":
      value = scoreArray.reduce((acc, cur) => acc + cur, 0);
      break;
    case "*":
      value = scoreArray.reduce((acc, cur) => acc *= cur, 1);
      break;
    default:
      console.log("not valid operator")
  }

  return value;
} // 각자리수 더하거나 곱하는 함수


module.exports = problem1;


function test() {

  console.log(problem1([97, 98], [197, 198])); // 0
  console.log(problem1([131, 132], [211, 212])); // 1
  console.log(problem1([99, 102], [211, 212])); // -1
  console.log(problem1("pobi", [211, 212])); //-1 : TypeError
  console.log(problem1([99, 102, 102], [211, 212])); //-1 LengthError
  console.log(problem1([99, 100], [213, 212])); //-1 inputError
  console.log(problem1([500, 501], [211, 212])); //-1 RangeError
  console.log(problem1([1,2], [211, 212])); //-1 pageError

}

