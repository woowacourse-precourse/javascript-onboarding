function problem4(word) {
  let answer = "";

  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"; //대문자
  const reLow = lowerAlphabet.split("").reverse().join(""); //대문자 reverse
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //소문자
  const reUpp = upperAlphabet.split("").reverse().join(""); //소문자 reverse

  for (let i = 0; i < word.length; i++) {
    //대문자 위치 찾아서 reverse 시키기
    if (word[i].match(/[A-Z]/g)) {
      answer += reUpp[upperAlphabet.indexOf(word[i])];
    }
    //소문자 위치 찾아서 reverse 시키기
    else if (word[i].match(/[a-z]/g)) {
      answer += reLow[lowerAlphabet.indexOf(word[i])];
    }
    //알파벳 외 그대로 두기
    else {
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;
