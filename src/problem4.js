function problem4(word) {
  var answer;
  // 알파벳 정보를 담은 string 저장
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  // 청개구리 문자 저장 array
  const resultArr = [];
  // 한 문자당 비교를 위해 loop
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") resultArr.push(" ");
    else {
      // alpha string에서 현재 word char의 index 저장
      const index = alpha.indexOf(word[i].toLowerCase());
      // 대문자라면
      if (word[i] === word[i].toUpperCase())
        resultArr.push(alpha[25 - index].toUpperCase());
      else resultArr.push(alpha[25 - index]);
    }
  }
  answer = resultArr.join("");
  return answer;
}

module.exports = problem4;
