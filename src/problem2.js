function problem2(cryptogram) {
  var answer ='';
  var i;
  var flag = 0;
  while(1){
    flag = 0;
    for(i=0;i<cryptogram.length - 1;i++){
      console.log(cryptogram[i]);
      if(cryptogram[i] == cryptogram[i+1]){
        cryptogram.replace(cryptogram[i]+cryptogram[i], '');
        flag = 1;
      }
    }
    if(flag == 0){
      break;
    }
  }
  
  answer = cryptogram;
  return answer;
}

module.exports = problem2;
