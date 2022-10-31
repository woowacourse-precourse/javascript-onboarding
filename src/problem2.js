function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;

function problem2(cryptogram) {
  var answer = "";
  let s = cryptogram;
  for (let i = 0; i < s.length; i++) {
    console.log(s[i], i, s.indexOf([i]));
    if (s.indexOf(s[i]) === s.indexOf(s[i + 1])) answer = s -= s[i] + s[i + 1];
  }
  return answer;
}

console.log(problem2("browoanoommnaon"));
