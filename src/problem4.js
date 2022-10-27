function problem4(word) {
  let answer = "";

  for (let x of word) {
    //기능목록 2-2 구현
    let text = x.charCodeAt();
    //예외처리, 연산
    //기능목록 1-1 구현, 2-1구현
    if (text >= 65 && text <= 90) {
      answer += String.fromCharCode(155 - text);
    } else if (text >= 97 && text <= 122) {
      answer += String.fromCharCode(219 - text);
    } else if (text === 32) answer += " ";
  }
  return answer;
}

module.exports = problem4;
