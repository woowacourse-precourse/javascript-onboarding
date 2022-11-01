const CONSTANTS = {
  FIRST_INDEX: 0,
  ASCII: {
    A: "A".charCodeAt(this.FIRST_INDEX), // 65
    Z: "Z".charCodeAt(this.FIRST_INDEX), // 90
    a: "a".charCodeAt(this.FIRST_INDEX), // 97
    z: "z".charCodeAt(this.FIRST_INDEX), // 122
  },
};

const reverseCharacter = (char) => {
  const { FIRST_INDEX, ASCII } = CONSTANTS;

  const asciiChar = char.charCodeAt(FIRST_INDEX);

  if (char.toUpperCase() === char) {
    return String.fromCharCode(ASCII.Z - asciiChar + ASCII.A);
  }

  return String.fromCharCode(ASCII.z - asciiChar + ASCII.a);
};

const isAlphabet = (char) => {
  const { FIRST_INDEX, ASCII } = CONSTANTS;

  const asciiChar = char.charCodeAt(FIRST_INDEX);

  return (
    (asciiChar >= ASCII.A && asciiChar <= ASCII.Z) ||
    (asciiChar >= ASCII.a && asciiChar <= ASCII.z)
  );
};

const problem4 = (word) => {
  let reversedWord = "";

  for (const char of word) {
    if (!isAlphabet(char)) {
      reversedWord += char;
      continue;
    }

    reversedWord += reverseCharacter(char);
  }

  return reversedWord;
};

module.exports = problem4;
