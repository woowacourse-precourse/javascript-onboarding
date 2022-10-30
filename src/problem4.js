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

function problem4(word) {
  var answer;

  return answer;
}

module.exports = problem4;
