function problem4(word) {
  let answer = "";
  // 1) 모든철자를 대소문자 구분하여 만드는 과정
  const alphabet_L = "abcdefghijklmnopqrstuvwxyz";
  const alphabet_U = alphabet_L.toUpperCase();
  return answer;
}

// 2) 청개구리 언어로 변환하는 과정
function convert(spell, fullSpell) {
  const idx = 25 - fullSpell.indexOf(spell);
  return fullSpell[idx];
}


module.exports = problem4;
