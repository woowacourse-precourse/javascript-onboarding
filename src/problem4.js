function problem4(word) {
  var answer = [];

  //97~122(a-z) 아스키 코드
  for (var i = 0; i < word.length; i++) {
    {
      if (word[i] !== ' ') {
        //무조건 소문자
        var words = String.fromCharCode(219 - word.toLowerCase().charCodeAt(i));

        word[i] === word[i].toUpperCase() //만약 대문자라면
          ? answer.push(words.toUpperCase())
          : answer.push(words);
      } else {
        answer.push(' ');
      }
    }
  }
  return answer.join('');
}

module.exports = problem4;
