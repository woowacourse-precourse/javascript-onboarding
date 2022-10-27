function problem4(word) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < word.length; i++) {
    var text = word[i];
    if (text === " ") {
      answer += " ";
      continue;
    }

    var textArr = upper.includes(text) ? upper : lower;
    var index = 25 - textArr.indexOf(text);
    answer += textArr[index];
  }

  return answer;
}

module.exports = problem4;
