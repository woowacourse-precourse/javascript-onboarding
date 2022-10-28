function problem1(pobi, crong) {
  var answer;
  if(isValid(pobi) && isValid(crong)){
    answer = judgeResult(getMaxScore(pobi), getMaxScore(crong))
    return answer
  }
  return -1;
}

function isValid(pageArray){
  function isValidArray(pageArray){
    return pageArray[0] % 2 !== 0 || pageArray[1] % 2 !== 1
  }
  function isValidCombination(pageArray){
    return pageArray[0] === pageArray[1] - 1
  }
  return isValidArray(pageArray) && isValidCombination(pageArray)
  
}

function getMaxScore(pageArray){
  return Math.max(
    sumAllElement(pageArray),
    multiplyAllElement(pageArray)
  )
}

function sumAllElement(pageArray){
  return Math.max(
    String(pageArray[0]).split('').reduce((acc, current) => acc + Number(current),0),
    String(pageArray[1]).split('').reduce((acc, current) => acc + Number(current),0)
    );
}

function multiplyAllElement(pageArray){
  return Math.max(
    String(pageArray[0]).split('').reduce((acc, current) => acc * Number(current),1),
    String(pageArray[1]).split('').reduce((acc, current) => acc * Number(current),1)
  );
}

function judgeResult(pobiScore, crongScore){

  switch(true){
    case pobiScore > crongScore:
      return 1;
    case pobiScore < crongScore:
      return 2;
    case pobiScore === crongScore:
      return 0;
    default:
      throw new Error('Unrechable Error')
  }
}

module.exports = problem1;