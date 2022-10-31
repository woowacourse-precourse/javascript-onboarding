function problem4(word) {
  var answer;

  const alphabet = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const reverse_alphabet =
    " zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA";
  let alphabet_arr = alphabet.split("");
  let reverse_alphabet_arr = reverse_alphabet.split("");

  const word_arr = word.split("");
  let reverse_word_arr = [];

  let index_arr = [];
  for (let i = 0; i < word_arr.length; i++) {
    alphabet_index = alphabet_arr.indexOf(word_arr[i]);
    index_arr.push(alphabet_index);
  }

  for (let j in index_arr) {
    reverse_word_arr.push(reverse_alphabet_arr[index_arr[j]]);
    answer = reverse_word_arr.join("");
  }

  return answer;
}

module.exports = problem4;
