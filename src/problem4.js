function problem4(word) {
  let wordArr = word.split("");
  let answer = "";

  const getWord = (changedIndex) => {
    let changedChar = String.fromCharCode(changedIndex);
    answer += changedChar;
  };

  for (let i = 0; i < wordArr.length; i++) {
    let tempAscii = wordArr[i].charCodeAt();
    const isUpper = 67 <= tempAscii && tempAscii <= 90;
    const isLower = 97 <= tempAscii && tempAscii <= 122;
    const isBlank = tempAscii === 32;

    if (isUpper) {
      let changedIndex = 155 - tempAscii;
      getWord(changedIndex);
    } else if (isLower) {
      let changedIndex = 219 - tempAscii;
      getWord(changedIndex);
    } else if (isBlank) {
      answer += wordArr[i];
    }
  }
  return answer;
}

module.exports = problem4;
