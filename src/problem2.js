function deleteDuplicate(string){
  var tmp = "";
  var check = 1;
  for(let i = 0;i < string.length;i++){
    if(tmp[tmp.length-1] === string[i]){
      check++;
      tmp += string[i];
    }
    else{
      if(check > 1){
        tmp = tmp.substring(0,tmp.length-check);
        tmp += string[i];
        check = 1;
      }
      else{
        tmp += string[i];
      }
    }
  }
  if(check > 1){
    tmp = tmp.substring(0,tmp.length-check);
  }
  return tmp;
}

function problem2(cryptogram) {
  var answer = cryptogram;
  while(1){
    if(answer !== deleteDuplicate(answer)){
      answer = deleteDuplicate(answer);
    }
    else{
      break;
    }
  }
  
  return answer;
}

module.exports = problem2;
