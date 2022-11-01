function problem4(word) {
  let answer = "";
  const A = "A".charCodeAt();
  const Z = "Z".charCodeAt();
  const a = "a".charCodeAt();
  const z = "z".charCodeAt();
  const Alphas = Z - A;
  const alphas = z - a;
  console.log(A, Z, Alphas, Alphas - "I".charCodeAt() + A + A);
  [...word].forEach((character) => {
    if (character !== " ") {
      if (character == character.toLowerCase()) {
        answer += String.fromCharCode(alphas - character.charCodeAt() + a + a);
      } else {
        answer += String.fromCharCode(Alphas - character.charCodeAt() + A + A);
      }
    } else {
      answer += " ";
    }
  });
  return answer;
}
module.exports = problem4;
