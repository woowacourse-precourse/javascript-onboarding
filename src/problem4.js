function problem4(word) {
  var answer = "";
  var Aanswer = [];

  var revAlp = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  var fUpAlp = revAlp.split("");
  var fLoAlp = revAlp.toLowerCase().split("");

  for (var int = 0; int < word.length; int++) {
    var uniNum = word[int].charCodeAt();
    if (uniNum > 65 && uniNum < 91) {
    }
  }

  return answer;
}

module.exports = problem4;
console.log(problem4("I love you"));
