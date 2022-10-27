function problem1(pobi, crong) {
  if (checkInputErr(pobi, crong)) return -1;

  const [pobiMax, crongMax] = findMaxScore(pobi,crong);
  if(pobiMax > crongMax) return 1;
  else if(pobiMax < crongMax) return 2;
  else return 0;
}

function checkInputErr(pobi, crong) {

  const validType = () => Array.isArray(pobi) && Array.isArray(crong);
  const validLength = () => pobi.length === 2 && crong.length === 2;
  const validRange = (array) => array.some(data => 1 <= data && data <= 400);
  const validValue = (array) => (array[0]%2 ===1) && (array[1] = array[0]+1);

  if(!validType()) return true;
  else if(!validLength()) return true;
  else if(!validRange(pobi) || !validRange(crong)) return true;
  else if(!validValue(pobi) || !validValue(crong)) return true;
  else return false;
  
}

function findMaxScore(pobi, crong){

  const calMaxScore = (array) => {
    let max = -1;
    array.forEach(val =>{
      const plusValue = calScore(val, "+");
      const multiValue = calScore(val, "*");

      max = Math.max(max, plusValue, multiValue);
    })

    return max;
  }

  const pobiMax = calMaxScore(pobi);
  const crongMax = calMaxScore(crong);

  return [pobiMax, crongMax];
}

function calScore(score, operator){
  const scoreArray = [...score.toString()].map(Number);
  let value;
  switch(operator){
    case "+" :
      value = scoreArray.reduce((acc,cur) => acc + cur, 0);
      break;
    case "*" :
      value = scoreArray.reduce((acc,cur) => acc *=cur , 1);
      break;
    default :
      console.log("not valid operator")
  }

  return value;
}


module.exports = problem1;
