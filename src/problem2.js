/*
function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
*/

let cryptogram="Browoanoommnaon";
let c = ""
console.log(c)

// cryptogram이 유효한 문자열인지 확인
function checkValid(c){
  if (c.length<1) {return false;}
  return c.toLowerCase();
}

console.log(checkValid(c));