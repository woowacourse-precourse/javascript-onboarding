function problem4(word) {
  var answer;
  answer = "";
  var abc = Array.from({length : 26}, (v, i) => String.fromCharCode(i+65));

  for(var i = 0 ; i < word.length ; i++){
    // 한글자씩 
    var mom = word[i];
    var idx = abc.indexOf(mom);
    if(idx > -1){
      // 대문자일때 
      answer += abc[25-idx];
    }else{
      mom = mom.toUpperCase();
      idx = abc.indexOf(mom);
      if(abc.indexOf(mom) > -1){
        answer += abc[25-idx].toLowerCase();
      }else{
        answer += mom;
      }
    }
  }
  console.log(answer);
  return answer;
}
module.exports = problem4;
