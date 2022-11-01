function problem4(word) {
  var arr_word = word.toString();
  var answer="";
  for(var i=0; i<arr_word.length; i++){
    if(arr_word.charCodeAt(i)>=65 && arr_word.charCodeAt(i)<=90){
      answer = answer.concat(String.fromCharCode(155-arr_word.charCodeAt(i)));
    }
    else if(arr_word.charCodeAt(i)>=97 && arr_word.charCodeAt(i)<=122){
      answer = answer.concat(String.fromCharCode(219-arr_word.charCodeAt(i)));
    }
    else answer = answer.concat(arr_word[i]);
  }
  return answer;
}

module.exports = problem4;
