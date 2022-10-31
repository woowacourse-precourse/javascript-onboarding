function deDuplication(str) {
  let result = "";
  let flag = false;

  if (!str) return result;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      flag = true;
    } else {
      if (!flag) result += str[i];
      flag = false;
    }
  }

  if (!flag) result += str[str.length - 1];

  return result;
}

function problem2(cryptogram) {
  let answer = cryptogram;
  let deDuplicated;

  while (answer) {
    deDuplicated = deDuplication(answer);
    if (answer === deDuplicated) break;
    answer = deDuplicated;
  }

  return answer;
}

module.exports = problem2;
