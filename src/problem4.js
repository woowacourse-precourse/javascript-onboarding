function problem4(word) {
  let answer;
  let result = [];

  let aToz = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let zToa = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA";

  for (let i = 0; i < word.length; i++) {
    let index = aToz.indexOf(word[i]);
    if (index == -1) {
      result.push(word[i]);
    } else {
    result.push(zToa[index]);
    }
  }

  answer = result.join("");
  return answer;
}

module.exports = problem4;
