function problem4(word) {
  var answer;
  answer = [];
  var wordArr = word.split("");
  for(let i=0;i<wordArr.length;i++){
    var ascii = wordArr[i].charCodeAt(0);
    if(ascii>=65 && ascii<=90){
      answer.push(String.fromCharCode(155-ascii));
    }
    else if(ascii>=97 && ascii<=122){
      answer.push(String.fromCharCode(219-ascii));
    }
    else{
      answer.push(wordArr[i]);
    }
    
    
  }
  answer = answer.join("")
  return answer;
}

module.exports = problem4;
