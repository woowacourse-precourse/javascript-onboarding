function problem2(cryptogram) {
  var answer;
  while(1){
    if(cryptogram==deletestring(cryptogram)){
      answer=deletestring(cryptogram)
      break;
    }
    else cryptogram=deletestring(cryptogram);
  }
  return answer;
}

function deletestring(c){
  var temp="";
  for(var i=0; i<c.length; i++){
    if(c[i]==c[i+1]){
      i++;
    }
    else temp+=c[i];
  }
  return temp;
}

module.exports = problem2;
