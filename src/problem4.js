function problem4(word) {
  let result = [];
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let changedealphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba";
  //let alphabet_arr = alphabet.split("");
  //const reverse_arr = [...alphabet_arr].reverse();
  for (let i = 0; i < word.length; i++) {
    let index = alphabet.indexOf(word[i]);
    if (index == -1) {
      result.push(word[i]);
    } else {
      result.push(changedealphabet[index]);
    }
  }
  answer = result.join("");
  return answer;
}

module.exports = problem4;
