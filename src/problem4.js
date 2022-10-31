function problem4(word) {
  let answer;

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

console.log(problem4("I love you"));

module.exports = problem4;
