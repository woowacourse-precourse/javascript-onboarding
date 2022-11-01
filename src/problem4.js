const ASCII = {
  A: "A".charCodeAt(),
  Z: "Z".charCodeAt(),
  a: "a".charCodeAt(),
  z: "z".charCodeAt(),
};

const getReverseWord = (word) => {
  const wordAscii = word.charCodeAt();

  if (wordAscii >= ASCII.A && wordAscii <= ASCII.Z) {
    return String.fromCharCode(ASCII.A + ASCII.Z - wordAscii);
  }
  if (wordAscii >= ASCII.a && wordAscii <= ASCII.z) {
    return String.fromCharCode(ASCII.a + ASCII.z - wordAscii);
  }
  return word;
};

function problem4(word) {
  const wordArr = word.split("");

  const reversedWord = wordArr.map((word) => getReverseWord(word));

  return reversedWord.join("");
}

module.exports = problem4;
