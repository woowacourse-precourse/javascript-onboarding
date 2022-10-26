function problem4(word) {
  var answer;
  let transformedWord = "";
  for (var char of word) {
    if (char.charCodeAt(0) >= "a".charCodeAt(0) || char <= "z".charCodeAt(0)) {
      transformedWord += String.fromCharCode(
        "z".charCodeAt(0) - char.charCodeAt(0) + "a".charCodeAt(0)
      );
    } else if (
      char.charCodeAt(0) >= "A".charCodeAt(0) ||
      char <= "Z".charCodeAt(0)
    ) {
      transformedWord += String.fromCharCode(
        "Z".charCodeAt(0) - char.charCodeAt(0) + "A".charCodeAt(0)
      );
    } else {
      transformedWord += char;
    }
  }
  answer = transformedWord;
  return answer;
}

// let word = "I love you";
// console.log(problem4(word));
module.exports = problem4;
