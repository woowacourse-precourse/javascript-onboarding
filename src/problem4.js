function problem4(word) {
  var answer = "";
  var low = "abcdefghijklmnopqrstuvwxyz";
  var upp = "ABCDEFGHIJKLMNOPQRSTUVWSYZ";
  for (var i=0;i<word.length;i++)
  {
    if (word[i] == ' '){
      answer = answer + ' ';
    }
    else if (word[i].toLowerCase() == word[i]) // 소문자
    {
        a = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
        answer = answer + low[25 - a];
    }
    else if (word[i].toUpperCase() == word[i]) // 대문자
    {
        a = word[i].charCodeAt(0) - 'A'.charCodeAt(0);
        answer = answer + upp[25 - a];
    }
  }
  return answer;
}

module.exports = problem4;
