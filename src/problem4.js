function problem4(word) {
  var answer="";
  var temp;
  var s;
  
  for (var i = 0; i<word.length; i++){
    s = word.charCodeAt(i);
    if (s>=65 && s<=90){
      temp = 155 - s;
    }
    else if(s>=97 && s<=122){
      temp = 219 - s;
    }
    else{
      temp = s;
    }
    answer += String.fromCharCode(temp);
  }

  return answer;
}

module.exports = problem4;
