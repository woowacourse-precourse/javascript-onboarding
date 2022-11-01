function problem4(word) {
  var original = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let reversed = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA";
  var answer = [];
  let result;

  for (let i = 0; i < word.length; i++) {

    var index = original.indexOf(word[i])
    if (index == -1) {
      answer.push(" ")
    }
    let char = reversed[index]
    answer.push(char)

  }
  result = answer.join("");
  return result
}

module.exports = problem4;
