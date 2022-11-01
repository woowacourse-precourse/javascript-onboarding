function problem4(word) {
  let answer;
  const result = [];
  const astring = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const zstring = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba";

  for (let value = 0; value <= word.length; value++) {
    let mark = astring.indexOf(word[value]);
    if (mark === -1) {
      result.push(word[value]);
    } else {
      result.push(zstring[mark]);
    }
  }
  answer = result.join("");
  return answer;
}

module.exports = problem4;
