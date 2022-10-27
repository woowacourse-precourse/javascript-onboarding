function problem6(forms) {
  var answer;
  return answer;
function checkDuplication(string, inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    if (string.includes(inputArray[i])) return true;
  }
  return false;
}

function generateTwoLetterArray(string) {
  let twoLetterArray = [];
  for (let i = 0; i < string.length - 1; i++) {
    twoLetterArray.push(string[i] + string[i + 1]);
  }
  return twoLetterArray;
}

module.exports = problem6;
