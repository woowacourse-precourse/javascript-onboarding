function problem3(number) {
  var answer;
  return answer;
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
