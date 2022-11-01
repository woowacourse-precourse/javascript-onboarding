function problem4(word) {
  var answer = solution(word);
  return answer;
}

function solution(word){
  new_word = '';
  for(let i = 0; i<word.length;i++){
    ascii = word.charCodeAt(i);
    if(ascii>=65 && ascii <= 90){ // Lower Case
      new_ch = String.fromCharCode((90-ascii) + 65);
    }
    else if(ascii >=97 && ascii <= 122){ // Upper Case
      new_ch = String.fromCharCode((122-ascii) + 97);
    }
    else{
      new_ch = word[i];
    }
    new_word += new_ch;
  }
  return new_word;
}

module.exports = problem4;
