const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function problem4(word) {
  const characters = [...word];

  const convertedCharacters = characters.map((character) => {
    const index = alphabets.findIndex((alphabet) => {
      return alphabet === character.toLowerCase();
    });

    if (index === -1) {
      return character;
    }

    if (isUpperCase(character)) {
      return alphabets[alphabets.length - 1 - index].toUpperCase();
    } else {
      return alphabets[alphabets.length - 1 - index];
    }
  });

  return convertedCharacters.join("");
}

function isUpperCase(alpha) {
  const upperRegex = /[A-Z]/g;

  return alpha.match(upperRegex) ? true : false;
}

module.exports = problem4;
