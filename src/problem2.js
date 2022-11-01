function problem2(cryptogram) {
  var answer;
  while(true){
    var status=0
    
    for(var i=0;i<cryptogram.length;i++){
      if(cryptogram[i]==cryptogram[i+1]){
        status=1
        var text1=cryptogram.slice(0, i);
        var text2=cryptogram.slice(i+2,cryptogram.length);
        cryptogram=text1.concat(text2)
        
        break
      }

    }
    if(status==0){
      break
    }
  }
  answer=cryptogram
  return answer;
}

module.exports = problem2;
