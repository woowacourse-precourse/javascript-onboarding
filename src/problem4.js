function problem4(word) {
  let answer = "";

  let dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
  let oppositeDictionary = 'ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba ';

  for (let i = 0; i < word.length; i++) {
    let b = dictionary.indexOf(word[i]);
    answer = answer.concat(oppositeDictionary[b]);
  }

  return answer;
}

module.exports = problem4;