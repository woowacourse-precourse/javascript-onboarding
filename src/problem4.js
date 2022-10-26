function problem4(word) {
  let transformedWord = "";
  for (var char of word) {
    // console.log(char);
    if (
      char.charCodeAt(0) >= "a".charCodeAt(0) &&
      char.charCodeAt(0) <= "z".charCodeAt(0)
    ) {
      transformedWord += String.fromCharCode(
        "z".charCodeAt(0) - char.charCodeAt(0) + "a".charCodeAt(0)
      );
    } else if (
      char.charCodeAt(0) >= "A".charCodeAt(0) &&
      char.charCodeAt(0) <= "Z".charCodeAt(0)
    ) {
      transformedWord += String.fromCharCode(
        "Z".charCodeAt(0) - char.charCodeAt(0) + "A".charCodeAt(0)
      );
    } else {
      transformedWord += char;
    }
  }
  return transformedWord;
}

// let word = "I love you";
// console.log(problem4(word));

module.exports = problem4;
