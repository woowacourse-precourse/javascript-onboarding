function problem1(pobi, crong) {
  if(errorCheck(pobi,crong)) 
    return -1;
  let pobiScore = getMaxScore(pobi);
  let crongScore = getMaxScore(crong);
}

function sumOfDigits(num) {
  return String(num)
    .split('')
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
}

function mulOfDigits(num) {
  return String(num)
    .split('')
    .reduce((acc, curr) => {
      return acc * Number(curr);
    },1);
}

function errorCheck(pobi,crong) {
  if(pobi.length !== 2 || crong.length !== 2) return true;
  else if(pobi[0]+1 !== pobi[1] || crong[0]+1 !== crong[1]) return true;
}

module.exports = problem1;
