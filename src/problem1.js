function findMax(array){
  let result = [];
  let mul;
  let sum;
  let strPage;
  
  for (let i=1; i<2; i++){
    mul = 1;
    sum = 0;
    strPage = array[i].toString();
    for (let j=0; j<strPage.length; j++){
      mul *= parseInt(strPage[j]);
      sum += parseInt(strPage[j]);
    }
    result.push(Math.max(mul, sum));
  }
  return Math.max(result);
}

function problem1(pobi, crong) {
  let answer;
  if (pobi[1]-pobi[0] !== 1 || crong[1]-crong[0] !== 1){
    return -1;
  }
  const maxPobi = findMax(pobi);
  const maxCrong = findMax(crong);
  if (maxPobi>maxCrong){
    answer = 1;
  }else if (maxPobi === maxCrong){
    answer = 0;
  }
  return answer;
  }

module.exports = problem1;


