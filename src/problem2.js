function problem2(cryptogram) {
  var answer ="";
  var repeat = true;

  while(repeat){
    repeat = false;
    for(var i = 0; i < cryptogram.length; i++) {
      if(cryptogram[i] !== cryptogram[i + 1]) {
        answer += cryptogram[i];
      }
      else if(cryptogram[i] === cryptogram[i + 1]) {
        i++;
        repeat = true;
      }
    }
    cryptogram = answer;
    answer = "";
  }
  answer = cryptogram;
  return answer;
}

module.exports = problem2;

