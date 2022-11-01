function problem4(word) {
  var answer = "";

  for(let i = 0; i < word.length ; i++){
    let s = word.charCodeAt(i);
    if(s >= 65 && s <= 90){
      s = 77.5 + (77.5 - s);
      answer += String.fromCharCode(s);
    }else if(s >= 97 && s <= 122){
      s = 109.5 + (109.5 - s);
      answer += String.fromCharCode(s);
    }else {
      answer += String.fromCharCode(s);
    }
  }
  return answer;
}

module.exports = problem4;
