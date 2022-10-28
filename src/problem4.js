function problem4(word) {
  var answer = "";
  const lowerRegex = /[a-z]/;
  const upperRegex = /[A-Z]/;

  for (let spell of word) {
    if (upperRegex.test(spell)) {
      let inverseUpperSpell =
        spell.charCodeAt() +
        ("Z".charCodeAt() - spell.charCodeAt()) -
        (spell.charCodeAt() - "A".charCodeAt());
      answer += String.fromCharCode(inverseUpperSpell);
    } else if (lowerRegex.test(spell)) {
      let inverseLowerSpell =
        spell.charCodeAt() +
        ("z".charCodeAt() - spell.charCodeAt()) -
        (spell.charCodeAt() - "a".charCodeAt());
      answer += String.fromCharCode(inverseLowerSpell);
    } else if (!upperRegex.test(spell) && !lowerRegex.test(spell))
      answer += spell;
  }
  return answer;
}

module.exports = problem4;
