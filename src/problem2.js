function subFuc(str) {
  let a = 0;
  let answer = str;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) == str.charAt(i + 1)) {
      str =
        str.slice(0, i) +
        str.slice(i + 2, str.length);
      a = 1;
      break;
    }
  }
  if (a == 1) {
    answer = subFuc(str);
  }
  return answer;
}

function problem2(cryptogram) {
  var answer = subFuc(cryptogram);
  return answer;
}

module.exports = problem2;
