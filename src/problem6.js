function problem6(forms) {
  let answer = [];
  let uniqueArr = [];
  let consecutiveArr = [];
}

function seperateConsecutive(nickname, uniqueArr, consecutiveArr) {
  for (let i = 0; i < nickname.length - 1; i++) {
    let word = nickname.slice(i, i + 2);
    if (uniqueArr.indexOf(word) === -1) uniqueArr.push(word);
    else if (consecutiveArr.indexOf(word) === -1) consecutiveArr.push(word);
  }
}

function isValid(nickname, consecutiveArr) {
  for (let i = 0; i < nickname.length - 1; i++)
    if (consecutiveArr.indexOf(nickname.slice(i, i + 2)) >= 0) return true;
  return false;
}

module.exports = problem6;
