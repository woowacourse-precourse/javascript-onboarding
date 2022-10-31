function problem2(cryptogram) {
  let answer;
  function sameSlice(text) {
    let isDouble = false;
    for (let i = 0; i < text.length - 1; i++) {
      if (text[i] === text[i + 1]) {
        text[i] = "";
        text[i + 1] = "";
        isDouble = true;
      }
    }
    text = text.filter((ele) => ele !== "");
    if (isDouble === false) {
      return text.join("");
    } else {
      return sameSlice(text);
    }
  }
  answer = sameSlice(Array.from(cryptogram));
  return answer;
}
module.exports = problem2;
