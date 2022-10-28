function problem1(pobi, crong) {
  var answer;
  return answer;
}

function isValid(pageArray){
  return  pageArray[0] % 2 === 0 || pageArray[1] % 2 === 1
}

function sumAllElement(pageNumber){
  return pageNumber.split('').reduce((acc, current) => acc + Number(current),0);
}

module.exports = problem1;