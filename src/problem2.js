function problem2(cryptogram) {
  var answer;

  do{
    if(cryptogram == ""){
      return answer;
    }
    
    answer = cryptogram[0];
    var beforeLength = cryptogram.length;
    for(var i = 1 ; i < cryptogram.length ; i++){
      if(answer[answer.length-1] != cryptogram[i]){
        answer += cryptogram[i];
      }else{
        answer = answer.substr(0, answer.length-1);
      }
    }

    cryptogram = answer;
    var afterLength = cryptogram.length;
  }while(beforeLength != afterLength)

  return answer;
}
module.exports = problem2;

//problem2("browoanoommnaon");