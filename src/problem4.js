function problem4(word) {
  let answer;
  // let answer = word.split(" ");
  // for (let i = 0; i < answer.length; i++) {
  //   answer[i] = frogRule(answer[i]);
  // }
  answer = frogRule(word);
  return answer;
}

function frogRule(s) {
  let answer = "";
  for (const value of s) {
    if (
      ("a".charCodeAt(0) <= value.charCodeAt(0) &&
        value.charCodeAt(0) <= "z".charCodeAt(0)) ||
      ("A".charCodeAt(0) <= value.charCodeAt(0) &&
        value.charCodeAt(0) <= "Z".charCodeAt(0))
    ) {
      if (value === value.toUpperCase()) {
        answer += String.fromCharCode(155 - value.charCodeAt(0));
      } else {
        answer += String.fromCharCode(219 - value.charCodeAt(0));
      }
    } else {
      answer += value;
    }
  }
  return answer;
}
module.exports = problem4;
