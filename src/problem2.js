function problem2(cryptogram) {
  var input = cryptogram.toString();
  if(input.length == 1) return answer;
  while(true){
    var answer = "";
    var count = 0;
    for(i=0; i<input.length; i++){
      if(i == 0){
        if(input[i] == input[i+1]) {
          count++;
          continue;
        }
        else answer = answer.concat(input[0]); 
      }
      else if(i == input.length-1){
        if(input[i] == input[i-1]) {
          count++;
          continue;
        }
        else answer = answer.concat(input[i]);
      }
      else{
        if(input[i] == input[i-1] || input[i] == input[i+1]) {
          count++;
          continue;
        }
        else answer = answer.concat(input[i]);
      }
    }
    if (count == 0) break;
    input = answer;
  }
  return answer;
}

module.exports = problem2;
