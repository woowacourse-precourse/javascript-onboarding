function problem4(word) {
  let answer = "";
  let asciiNum;

  for (let i=0; i<word.length; i++) {
    // 띄어쓰기인 경우
    if (word[i] === ' ') answer += ' ';

    // 알파벳인 경우
    else {
      asciiNum = word.charCodeAt(i);

      // 소문자인 경우 (a: 97 ~ z: 122)
      if (asciiNum >= 97) answer += String.fromCharCode(Math.abs(219-asciiNum));

      // 대문자인 경우 (A: 65 ~ Z: 90)
      else answer += String.fromCharCode(Math.abs(155-asciiNum));
    }
  }

  return answer;
}

module.exports = problem4;
