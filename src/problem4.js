function problem4(word) {
  var answer = "";
  let ans = [];

  word = [...word];

  let bigAlphabets = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  let smallAlphabets = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );

  let i = 0;
  while (i < word.length) {
    // 공백
    if (word[i] === " ") {
      ans.push(" ");
    }
    // 대문자
    else if (word[i] === word[i].toUpperCase()) {
      let code = word[i].charCodeAt(0);
      let reverseLetter = String.fromCharCode(155 - code);
      ans.push(reverseLetter);
    }
    // 소문자
    else if (word[i] === word[i].toLowerCase()) {
      let code = word[i].charCodeAt(0);
      let reverseLetter = String.fromCharCode(219 - code);
      ans.push(reverseLetter);
    }
    i++;
  }

  answer = ans.join("");

  return answer;
}

module.exports = problem4;
