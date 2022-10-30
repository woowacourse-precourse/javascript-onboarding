const A = 65,
  Z = 90,
  M = 77;
const a = 97,
  z = 122,
  m = 109;
const ALPHABET_DIFF = 25;

function transCapital(asciiNum) {}

function transSmall(asciiNum) {}

function problem4(word) {
  let answer = "";

  for (let index = 0; index < word.length; index++) {
    const ascii = word.charCodeAt(index);

    if (A <= ascii && ascii <= Z) {
      answer += transCapital(ascii);
    } else if (a <= ascii && ascii <= z) {
      answer += transSmall(ascii);
    } else {
      answer += word[index];
    }
  }

  return answer;
}

module.exports = problem4;
