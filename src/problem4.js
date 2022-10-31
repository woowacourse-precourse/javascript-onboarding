function problem4(word) {
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  reverse_dict = {}
  for (i = 0;i<alphabet.length;i++){
    reverse_dict[alphabet[i]] = alphabet[alphabet.length-1-i];
  }
  reverse_dict[' '] = ' '

  letters = word.split("");
  answer = [];
  for (i =0;i<letters.length;i++){
    if (word[i] == word[i].toLowerCase()){
      answer.push(reverse_dict[word[i]]);
    }
    else if (word[i] == word[i].toUpperCase()){
      answer.push(reverse_dict[word[i].toLowerCase()].toUpperCase());
    }
    else{
      answer.push(word[i]);
    }
  }
  answer = answer.join('');
  var answer;

  return answer;
}

module.exports = problem4;
