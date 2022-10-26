function problem1(pobi, crong) {
  //짝수, 홀수 : even, odd
  var answer;
  var [a,b] = pobi;
  var [c,d] = crong;
  
  var pobiNum = 0;
  var crongNum = 0;
  function add(num) {
      return String(num).split("").reduce((n,i) => n + parseInt(i),0);
  }
  function multiply(num) {
    return String(num).split("").reduce((n,i) => n*i);
    }
  return answer;
}
module.exports = problem1;
