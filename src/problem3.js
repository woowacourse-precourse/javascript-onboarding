function problem3(number) {
  var answer = getTotalClap(number);
  return answer;
}

function getTotalClap(number){
  let totalClap = 0;
  for(let x = 1;x <= number;x++){
    totalClap += countClap(x)
  }
  return totalClap;
}

function countClap(number){
  const countRegEx = /3|6|9/g;
  const numberArr = String(number).match(countRegEx);
  if(numberArr){
    return numberArr.length;
  }
  return 0;
}

module.exports = problem3;
