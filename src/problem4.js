const isAlphabet = (str) => {
  if (
    ("A".charCodeAt() <= str.charCodeAt() &&
      str.charCodeAt() <= "Z".charCodeAt()) ||
    ("a".charCodeAt() <= str.charCodeAt() &&
      str.charCodeAt() <= "z".charCodeAt())
  )
    return true;
};

const isCapital = (alp) => {
  if (
    "A".charCodeAt() <= alp.charCodeAt() &&
    alp.charCodeAt() <= "Z".charCodeAt()
  )
    return true;
};

const transformAlphabet = (alp) => {
  let invertedAlp;

  if (isCapital(alp))
    invertedAlp = String.fromCharCode(
      "Z".charCodeAt() + "A".charCodeAt() - alp.charCodeAt()
    );
  else if (!isCapital(alp))
    invertedAlp = String.fromCharCode(
      "z".charCodeAt() + "a".charCodeAt() - alp.charCodeAt()
    );

  return invertedAlp;
};

function problem4(word) {
  var answer;

  return answer;
}

module.exports = problem4;
