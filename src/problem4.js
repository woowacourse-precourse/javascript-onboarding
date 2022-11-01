function problem4(word) {
  let answer = word.split(" ");
  for (let i = 0; i < answer.length; i++) {
    answer[i] = frogRule(answer[i]);
  }
  return answer.join(" ");
}

function frogRule(s) {
  let answer = "";
  for (const value of s) {
    if (value === value.toUpperCase()) {
      answer += String.fromCharCode(155 - value.charCodeAt(0));
    } else {
      answer += String.fromCharCode(219 - value.charCodeAt(0));
    }
  }
  return answer;
}
module.exports = problem4;
