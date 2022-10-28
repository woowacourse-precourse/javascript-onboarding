function getOppositeChar(word, idx) {
  let opposite;
  const charCode = word.charCodeAt(idx);

  if (charCode >= 65 && charCode <= 90) {
    opposite = String.fromCharCode(155 - charCode);
  } else if (charCode >= 97 && charCode <= 122) {
    opposite = String.fromCharCode(155 - word.toUpperCase().charCodeAt(idx)).toLowerCase();
  } else {
    opposite = word[idx];
  }

  return opposite;
}

function problem4(word) {
  return [...word].map((_char, idx) => getOppositeChar(word, idx)).join("");
}

console.log(problem4("I love you"));

module.exports = problem4;
