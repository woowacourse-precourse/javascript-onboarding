function inverseUpper(spell) {
  let inverseUpperSpell =
    spell.charCodeAt() +
    ("Z".charCodeAt() - spell.charCodeAt()) -
    (spell.charCodeAt() - "A".charCodeAt());

  return String.fromCharCode(inverseUpperSpell);
}

function inverseLower(spell) {
  let inverseLowerSpell =
    spell.charCodeAt() +
    ("z".charCodeAt() - spell.charCodeAt()) -
    (spell.charCodeAt() - "a".charCodeAt());

  return String.fromCharCode(inverseLowerSpell);
}

function problem4(word) {
  var answer = "";
  const lowerRegex = /[a-z]/;
  const upperRegex = /[A-Z]/;

  for (let spell of word) {
    if (upperRegex.test(spell)) {
      answer += inverseUpper(spell);
    } else if (lowerRegex.test(spell)) {
      answer += inverseLower(spell);
    } else if (!upperRegex.test(spell) && !lowerRegex.test(spell))
      answer += spell;
  }
  return answer;
}

module.exports = problem4;
