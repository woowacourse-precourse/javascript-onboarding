function problem1(pobi, crong) {
  var answer = page(pobi,crong);
  return answer;
}
function sum(n){    //배열의 값을 각각 더하는 함수
  let answer = 0
  n = n.toString()
  for (let i = 0; i < n.length; i++){
    answer += parseInt(n[i])
  }
  return answer; 

  
module.exports = problem1;
