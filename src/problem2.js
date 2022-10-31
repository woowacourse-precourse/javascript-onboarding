function problem2(cryptogram) {
  var answer;
  let spellList = cryptogram.split("");

  let i = 0;

  while (i < spellList.length) {
    let countReduplicated = i;
    while (spellList[countReduplicated] === spellList[countReduplicated + 1]) {
      countReduplicated++;
    }
    if (spellList[i] === spellList[i + 1]) {
      spellList.splice(i, countReduplicated - i + 1);
      i = -1; // 문자열의 처음부터 다시 확인하기 위해 -1를 i에 할당
    }
    i++;
  }

  answer = spellList.join("");
  return answer;
}

module.exports = problem2;
