function consecutiveWord(word) {
  let arr = [];
  const wordArr = word.split("");
  for (let i = 0; i < wordArr.length; i++) {
    for (let j = i + 2; j <= wordArr.length; j++) {
      arr.push(wordArr.slice(i, j).join(""));
    }
  }
  return arr;
}

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
