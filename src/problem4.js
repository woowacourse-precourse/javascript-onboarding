function problem4(word) {
  var answer = "";
  var Aanswer = [];

  var revAlp = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  var fUpAlp = revAlp.split("");
  var fLoAlp = revAlp.toLowerCase().split("");

  for (var int = 0; int < word.length; int++) {
    console.log(word.length);
    var uniNum = word[int].charCodeAt();
  }

  return answer;
}
function index(char) {
  var result = [];
  var Alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var mUpAlp = Alp.split("");
  var mLoAlp = Alp.toLowerCase().split("");
  var index = char.charCodeAt();
  if (index > 64 && index < 91) {
    result.push(mUpAlp.indexOf(char));
  } else if (index > 96 && index < 123) {
    result.push(mLoAlp.indexOf(char));
  } else {
    result.push(" ");
  }

  return result;
}

module.exports = problem4;
console.log(problem4("I love you"));
