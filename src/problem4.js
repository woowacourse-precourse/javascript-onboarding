function problem4(word) {
  const trans = {};
  const [A, Z, a, z] = ["A", "Z", "a", "z"].map((x) => x.charCodeAt());
  for (let i = 0; i < 26; i++) {
    trans[String.fromCharCode(A + i)] = String.fromCharCode(Z - i);
    trans[String.fromCharCode(a + i)] = String.fromCharCode(z - i);
  }

  return Array.from(word)
    .map((c) => trans[c] || c)
    .join("");
}

// console.log(problem4("I love you"));

module.exports = problem4;
