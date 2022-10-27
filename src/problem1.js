function sumOfNums(myArr) {
  const mySum = myArr.reduce((sum, element) => sum+=element, 0);
  return mySum;
}

function multipleOfNums(myArr) {
  const myMulti = myArr.reduce((multi, element) => multi*=element, 1);
  return myMulti;
}

function numToArr(num) {
  let myArr = String(num).split('').map((element) => {
    return Number(element);
  })
  return myArr;
}

function getMax(player) {
  let maxResult = 0;

  player.forEach((element) => {
    const myArr = numToArr(element);
    const maxValue = Math.max(sumOfNums(myArr), multipleOfNums(myArr));
    maxResult = Math.max(maxResult, maxValue);
  });

  return maxResult;
}

function isValid(player) {
  if(player.length !== 2) return false;
  if(isNaN(player[0]) || isNaN(player[1])) return false;
  if(player[0]+1 !== player[1]) return false;
  if(player[0] < 1 || player[1] > 400) return false;
  if(!(player[0]%2 === 1 && player[1]%2 === 0)) return false;
  return true;
}

function problem1(pobi, crong) {
  if(!(isValid(pobi)&&isValid(crong))) return -1;
  const maxPobi = getMax(pobi);
  const maxCrong = getMax(crong);
  if(maxPobi>maxCrong) return 1;
  if(maxPobi<maxCrong) return 2;
  return 0;
}

module.exports = problem1;