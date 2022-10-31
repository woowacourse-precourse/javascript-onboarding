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
module.exports = problem3;
