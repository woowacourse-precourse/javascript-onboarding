function problem1(pobi, crong) {
  const pobiScore = Math.max(pageSum(pobi),pageMul(pobi))
  const crongScore = Math.max(pageSum(crong),pageMul(crong));

  return ScoreResult(Pobiscore,crongscore);
}

function pageSum(num){
  if (num >= 100){
  return num / 100 + ((num % 100) / 10) + num % 10 
 }
 return (num / 10) + (num % 10);
}

function pageMul(num){
  if (num >= 100){
      return (num/100) * ((num%100)/10) * (num % 10);
  }
  return (num / 10) * (num % 10);
}

module.exports = problem1;
