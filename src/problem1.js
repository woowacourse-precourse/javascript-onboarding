function problem1(pobi, crong) {
  if(errorCheck(pobi,crong)) 
    return -1;
  let pobiScore = getMaxScore(pobi);
  let crongScore = getMaxScore(crong);
  return resultLogic(pobiScore, crongScore);
}

// multiply and sum each digit of the number
function calOfDigits(num) {
  let [sum,mult] = [0,1];
  String(num).split('').forEach( currNum => {
      sum += Number(currNum);
      mult *= Number(currNum);
    });
  return [sum,mult];
}

// get max score of the calOfDigits results
function getMaxScore([leftScore, rightScore]) {
  return Math.max(...calOfDigits(leftScore),...calOfDigits(rightScore));
}

// return the winner
function resultLogic(pobiScore, crongScore) {
  if (pobiScore > crongScore)  return 1
  else if(pobiScore < crongScore) return 2;
  else return 0;
}


// check the error
function errorCheck(pobi,crong) {
  if(pobi.length !== 2 || crong.length !== 2) return true;
  else if(pobi[0]+1 !== pobi[1] || crong[0]+1 !== crong[1]) return true;
}

module.exports = problem1;
