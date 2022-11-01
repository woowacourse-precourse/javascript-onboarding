const lowerCase = [];
const frogLowerCase = [];
const upperCase = [];
const frogUpperCase = [];
function createLowerCaseChar() {
  let a = 97;
  for (let i = 97; i <= 122; i++) {
    lowerCase.push(i);
  }
  for (let i = 122; i >= a; i--) {
    frogLowerCase.push(i);
  }
}
function createUpperChar() {
  let a = 65;
  for (let i = 65; i <= 90; i++) {
    upperCase.push(i);
  }
  for (let i = 90; i >= a; i--) {
    frogUpperCase.push(i);
  }
}
createLowerCaseChar();
createUpperChar();
function problem4(word) {
  let charResult = [];
  let charArray = [];
  for (let i = 0; i < word.length; i++) {
    let wordArray = word.charCodeAt([i]);
    charArray.push(wordArray);
  }
  for (char of charArray) {
    if (65 <= char && char <= 90) {
      let upperIndex = upperCase.indexOf(char);
      let frogUpperIndex = frogUpperCase[upperIndex];
      charResult.push(frogUpperIndex);
    } else if (97 <= char && char <= 122) {
      let lowerIndex = lowerCase.indexOf(char);
      let frogLowerIndex = frogLowerCase[lowerIndex];
      charResult.push(frogLowerIndex);
    } else {
      let index = char;
      charResult.push(index);
    }
  }
  var answer = String.fromCharCode(...charResult);
  return answer;
}
module.exports = problem4;
