function problem2(cryptogram) {
  var answer = "";
  let count = 0;
  while(count < cryptogram.length){
    if(answer[answer.length-1] === cryptogram[count]){
      answer = answer.substring(0,answer.length-1);
      while(cryptogram[count] === cryptogram[count+1]){
        count++;
      }
    }
    else{
      answer += cryptogram[count];
    }
    count++;
  }
  return answer;
}

module.exports = problem2;
