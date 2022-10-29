function problem4(word) {
  let answer = "";
  // 1) 모든철자를 대소문자 구분하여 만드는 과정
  const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
  const UPPER_CASE = LOWER_CASE.toUpperCase();

  // 3) 순회하면서 대소문자에 맞게 변환하는 과정
  for (let spell of word) {
    if (LOWER_CASE.includes(spell)) {
      answer += convert(spell, LOWER_CASE);
    } else if (UPPER_CASE.includes(spell)) {
      answer += convert(spell, UPPER_CASE);
    } else {
      // 4) 알파벳 외의 문자는 변환하지 않고 그대로 넣어주는 과정
      answer += spell;
    }
  }

  return answer;
}

// 2) 청개구리 언어로 변환하는 과정
function convert(spell, fullSpell) {
  const LENGTH_OF_FULL = fullSpell.length;
  const IDX_CHANGE = LENGTH_OF_FULL - (fullSpell.indexOf(spell) + 1);
  return fullSpell[IDX_CHANGE];
}

module.exports = problem4;
