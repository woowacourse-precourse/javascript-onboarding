function problem4(word) {
  var answer ="";

  const alphabet_arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let alphabet = {};

  for (let i = 0; i < alphabet_arr.length; i++){
      alphabet[alphabet_arr[i]] = alphabet_arr[alphabet_arr.length - (i+1)];
  }

  for (let j = 0; j < word.length; j++){
    if (word[j] === " "){
      answer += " ";
    }else if(word[j] != word[j].toUpperCase()){
      var temp1 = alphabet[word[j].toUpperCase()];
      answer += temp1.toLowerCase();
    }else {
      answer += alphabet[word[j]];
    }
  }

  return answer;
}



module.exports = problem4;