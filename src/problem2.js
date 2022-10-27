function problem2(cryptogram) {
  var answer = solution(cryptogram);
  return answer;
};
function solution(cryptogram) {
  let decode = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (decode[decode.length - 1] === cryptogram.charAt(i)) {
      decode.pop();
    } else {
      decode.push(cryptogram.charAt(i));
    }
  }
  let answer = decode.length === 0 ? "" : decode.join("");
  return answer;
};
module.exports = problem2;