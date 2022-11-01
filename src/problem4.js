const REVERTED = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';

function problem4(word) {
  let answer = '';

  for(let i=0; i<word.length; i++){
    if(word[i] === ' '){
      answer += ' ';
      continue;
    }
    if(word[i] === word[i].toUpperCase()){
      answer += REVERTED[word[i].charCodeAt(0) - 'A'.charCodeAt(0)];
    }
    else{
      answer += REVERTED[word[i].charCodeAt(0) - 'a'.charCodeAt(0)].toLowerCase();
    }
  }

  return answer;
}

module.exports = problem4;
