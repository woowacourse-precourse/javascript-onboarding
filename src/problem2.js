function problem2(cryptogram) {
  var answer;
  var alphabet;
  var check;

  while(true){
    answer = "";
    check = true;
    for (var i = 0; i<cryptogram.length-1; i++){
    alphabet = cryptogram.charAt(i);
      if (alphabet != cryptogram.charAt(i+1)){
        answer += alphabet;
      }else{
        i++;
        check = false;
      }
    }
    if (i == cryptogram.length-1){
      answer += cryptogram.charAt(cryptogram.length-1);
    }
    if(check){
      break;
    }
    cryptogram = answer;
  }

  return answer;
}



module.exports = problem2;
