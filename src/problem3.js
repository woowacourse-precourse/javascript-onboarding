function problem3(number) {
  if(num<1 || num>10000 || Number.isIntiger(number) === false){
    return -1;
  }
  var answer;
  let numArr = [];
  let numString = num.toString();
  for(let i = 0; i < numString.length; i+){
    numArr[i] = numString[i];
  }
  
  return answer;
}

module.exports = problem3;
