function problem1(pobi, crong) {
  var answer;
  return answer;
}

function isValid(pageArray){
  return  pageArray[0] % 2 !== 0 || pageArray[1] % 2 !== 1
}

function getMaxScore(pageArray){
  return Math.max(
    sumAllElement(pageArray),
    multiplyAllElement(pageArray)
  )
}

function sumAllElement(pageArray){
  return Math.max(
    pageArray[0].split('').reduce((acc, current) => acc + Number(current),0),
    pageArray[1].split('').reduce((acc, current) => acc + Number(current),0)
    );
}

function multiplyAllElement(pageArray){
  return Math.max(
    pageArray[0].split('').reduce((acc, current) => acc * Number(current),1),
    pageArray[1].split('').reduce((acc, current) => acc * Number(current),1)
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