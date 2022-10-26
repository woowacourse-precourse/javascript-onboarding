function problem1(pobi, crong) {
  var answer;
  const pobiScore = Math.max.apply(null,pobi.map(pageNumber => getMaxNumber(pageNumber)));
  const crongScore = Math.max.apply(null,crong.map(pageNumber => getMaxNumber(pageNumber)));

  return answer;
}

function getMaxNumber(value){
  const sum = value.toString().split('').map(Number).reduce((total,current) => total + current , 0);
  const multiply = value.toString().split('').map(Number).reduce((total,current) => total * current , 1);
  const max = Math.max(sum,multiply);

  return max
}
module.exports = problem1;
