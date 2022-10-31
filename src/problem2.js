function problem2(cryptogram) {
  let answer;
  function sameSlice(text) {
    let isSame = false;
    for (let i = 0; i < text.length - 1; i++) {
      if (text[i] === text[i + 1]) {
        let j = i + 1;
        while (text[j] === text[i]) {
          text[j] = "";
          j++;
        }
        text[i] = "";
        isSame = true;
      }
    }
    text = text.filter((ele) => ele !== "");
    if (isSame === false) {
      return text.join("");
    } else {
      return sameSlice(text);
    }
  }
  answer = sameSlice(Array.from(cryptogram));
  return answer;
}

module.exports = problem2;
