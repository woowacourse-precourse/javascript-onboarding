function problem4(word) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";
  var regExp = /[\W,]+/g;

  for (var i = 0; i < word.length; i++) {
    var text = word[i];
    if (text.match(regExp)) {
      answer += text;
      continue;
    }

    var textArr = upper.includes(text) ? upper : lower;
    var index = 25 - textArr.indexOf(text);
    answer += textArr[index];
  }

  return answer;
}

module.exports = problem4;
