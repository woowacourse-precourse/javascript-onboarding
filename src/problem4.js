function problem4(word) {
  var answer = '';

  for(let i = 0; i < word.length; i++){
    if(word[i] == ' '){
      answer += word[i]
    }
    else {
      var temp = word[i].charCodeAt(0)
      if(temp < 97){
        answer += String.fromCharCode(90 - temp + 65)
      }
      else{
        answer += String.fromCharCode(122 - temp + 97)
      }
    }
  }
  
  return answer;
}

module.exports = problem4;
