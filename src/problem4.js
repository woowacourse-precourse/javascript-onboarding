function problem4(word) {
  var answer = "";

  for(var i = 0; i < word.length; i++){
    if(word[i] >= "A" && word[i] <= "Z"){
      answer += String.fromCharCode(155 - word.charCodeAt(i));
    }
    else if(word[i] >= "a" && word[i] <= "z"){
      answer += String.fromCharCode(219 - word.charCodeAt(i));
    }
    else{
      answer += word[i];
    }
    
  }
  return answer;
}

module.exports = problem4;
