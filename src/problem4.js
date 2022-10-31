function problem4(word) {
  let answer;

  answer = "";
  for (let i = 0; i < word.length; i++) {
    const character = word[i];

    if (isAlphabet(character)) {
      answer += convertSymmetry(character);
    } else {
      answer += character;
    }
  }

  return answer;
}

function isAlphabet(character) {
  if ("A" <= character && character <= "Z") return true;
  if ("a" <= character && character <= "z") return true;
  return false;
}

function convertSymmetry(character) {
  let asciiCode;

  if ("A" <= character && character <= "Z") {
    asciiCode = "A".charCodeAt() + "Z".charCodeAt();
  } else {
    asciiCode = "a".charCodeAt() + "z".charCodeAt();
  }
  asciiCode -= character.charCodeAt();
  return String.fromCharCode(asciiCode);
}

module.exports = problem4;
