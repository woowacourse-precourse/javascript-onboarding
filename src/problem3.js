function problem3(number) {
  var answer;
  return answer;
}
function countNumber(number) {
  const arr = [];
  for(i = 1; i <= number; i ++){
    arr.push(i);
  }
  const totalNumber = arr.toString().split('');   
  let filtered = totalNumber.filter((element) => element !== ',');
  return filtered;
}
function clapNumber(number){
  const filteredNumbers = countNumber(number);
  const clapArr = [];
  for(i = 0; i <= filteredNumbers.length; i++){
    if(filteredNumbers[i] === '3' || filteredNumbers[i] === '6' || filteredNumbers[i] === '9'){
      clapArr.push(filteredNumbers[i]);
    }
  }
  return clapArr.length;
}

module.exports = problem3;
