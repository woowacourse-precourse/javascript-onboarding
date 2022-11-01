function problem4(word) {
  let answer = findLowerArr(word).join("");

  return answer;
}

function findUpperArr(word) {
  let alphabetUpperArr = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );

  let UpperArr = [];
  for (let i = 0; i < word.split("").length; i++) {
    let changeUpperCase = alphabetUpperArr.indexOf(word.split("")[i]);
    if (alphabetUpperArr[26 - (changeUpperCase + 1)]) {
      UpperArr.push(alphabetUpperArr[26 - (changeUpperCase + 1)]);
    } else {
      UpperArr.push(word[i]);
    }
  }
  return UpperArr;
}

function findLowerArr(word) {
  let alphabetLowerArr = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );

  let LowerArr = [];
  for (let i = 0; i < word.split("").length; i++) {
    let changeLowerCase = alphabetLowerArr.indexOf(findUpperArr(word)[i]);

    if (alphabetLowerArr[26 - (changeLowerCase + 1)]) {
      LowerArr.push(alphabetLowerArr[26 - (changeLowerCase + 1)]);
    } else {
      LowerArr.push(findUpperArr(word)[i]);
    }
  }
  return LowerArr;
}

module.exports = problem4;
