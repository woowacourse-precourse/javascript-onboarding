function problem4(word) {
  var answer = "";
  for (let i = 0; i < word.length; i++) {
    const momChar = word[i];
    const momCharIdx = word[i].charCodeAt(0);
    const startLowerCharIdx = "a".charCodeAt(0);
    const endLowerCharIdx = "z".charCodeAt(0);
    const startUpperCharIdx = "A".charCodeAt(0);
    const endUpperCharIdx = "Z".charCodeAt(0);

    if (momCharIdx > startLowerCharIdx && momCharIdx < endLowerCharIdx) {
      answer += String.fromCharCode(endLowerCharIdx - momCharIdx + startLowerCharIdx);
    } else if (momCharIdx > startUpperCharIdx && momCharIdx < endUpperCharIdx) {
      answer += String.fromCharCode(endUpperCharIdx - momCharIdx + startUpperCharIdx);
    } else {
      answer += momChar;
    }
  }
  return answer;
}

module.exports = problem4;
