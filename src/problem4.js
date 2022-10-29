function problem4(word) {
  const ALPABET = "abcdefghijklmnopqrstuvwxyz";
  const alpabetHash = (char) =>
    ALPABET[ALPABET.length - 1 - ALPABET.indexOf(char)];

  function isAlpabet(char) {
    return /[a-zA-Z]/.test(char);
  }

  function isLowerCase(char) {
    return /[a-z]/.test(char);
  }
}

const map = (f, iter) => {
  if (typeof iter === "string") return map(f, [...iter]).join("");
  let res = [];
  for (const item of iter) {
    res.push(f(item));
  }
  return res;
};

module.exports = problem4;
