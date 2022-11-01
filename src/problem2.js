function problem2(cryptogram) {
  var answer;

  while(true){
    var len = cryptogram.length;
    var tmp = "";
    var prev = "";
    for(var i = 1; i < len; i++){
    
      if (cryptogram[i] !== cryptogram[i - 1] && prev !== cryptogram[i-1]){
        tmp += cryptogram[i-1];
      }
      else prev = cryptogram[i-1];

    }
    if (cryptogram[len - 1] != cryptogram[len - 2]) tmp += cryptogram[len - 1];

    if(cryptogram === tmp) break;
    cryptogram = tmp;
  }
  answer = cryptogram;

  return answer;
}
module.exports = problem2;
