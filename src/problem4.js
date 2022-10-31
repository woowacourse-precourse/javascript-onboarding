function problem4(word) {
  let answer = "";
  let [largeA, largeZ] = [65, 90];
  let [smallA, smallZ] = [97, 122];
  for (let i = 0; i < word.length; i++) {
    let ascii = word[i].charCodeAt(0);
    let diff;
    if (ascii <= largeZ && ascii >= largeA) {
      // 대문자
      diff = Math.abs(largeA - ascii);
      answer += String.fromCharCode(largeZ - diff);
    } else if (ascii >= smallA && ascii <= smallZ) {
      // 소문자
      diff = Math.abs(smallA - ascii);
      answer += String.fromCharCode(smallZ - diff);
    } else {
      // 알파벳 이외의 문자
      answer += word[i];
    }
  }
  return answer;
}

module.exports = problem4;
