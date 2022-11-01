function problem4(word) {
  const answer = [];

  let asciiArr = [];
  let resultArr = [];

  for (let i = 0; i < word.length; i++) {
    asciiArr.push(word.charCodeAt(i));
  }

  for (let i = 0; i < asciiArr.length; i++) {
    if (asciiArr[i] === 32) {
      resultArr.push(32);
    } else if (asciiArr[i] >= 65 && asciiArr[i] <= 90) {
      resultArr.push(155 - asciiArr[i]);
    } else {
      resultArr.push(219 - asciiArr[i]);
    }
  }

  for (let i = 0; i < resultArr.length; i++) {
    answer.push(String.fromCharCode(resultArr[i]));
  }

  return answer.join("");
}

module.exports = problem4;
