function problem1(pobi, crong) {
  const pobiLeftScore = Math.max(pageSum(pobi[0]),pageMul(pobi[0]));

  const pobiRightScore = Math.max(pageSum(pobi[1]),pageMul(pobi[1]));

  const crongLeftScore = Math.max(pageSum(crong[0]),pageMul(crong[0]));

  const crongRigthScore = Math.max(pageSum(crong[1]),pageMul(crong[1]));

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
