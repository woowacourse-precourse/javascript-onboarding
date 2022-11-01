function problem4(word) {
  var answer = "";
  var Aanswer = [];

  var revAlp = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  var fUpAlp = revAlp.split("");
  var fLoAlp = revAlp.toLowerCase().split("");

  for (var int = 0; int < word.length; int++) {
    var uniNum = word[int].charCodeAt();
    if (uniNum > 65 && uniNum < 91) {
      Aanswer.push(fUpAlp[index(word[int])]);
    } else if (uniNum > 96 && uniNum < 123) {
      Aanswer.push(fLoAlp[index(word[int])]);
    } else {
      Aanswer.push(" ");
    }
  }
  answer = Aanswer.join("");
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
