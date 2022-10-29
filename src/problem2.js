function problem2(cryptogram) {
  var stringToArray = cryptogram.split("");
  var answer = [];

  for (var val of stringToArray) {
    if (val === answer[answer.length - 1]) {
      answer.pop();
    } else {
      answer.push(val);
    }
  }
  return answer.join('');
}
// var cryptogram = "zyelleyza";
// console.log(problem2(cryptogram));

module.exports = problem2;
