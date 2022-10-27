function problem2(cryptogram) {
  let str = [...cryptogram];
  let i = 0;

  while (i < str.length) {
    // 현재 문자가 다음 문자와 같은지 파악
    if (str[i] === str[i + 1]) {
      // 같다면 현재 문자와 다음 문자를 제거
      // 이후 다시 처음으로 돌아가 다시 암호를 해독
      str.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }

  return str.join("");
}

module.exports = problem2;
