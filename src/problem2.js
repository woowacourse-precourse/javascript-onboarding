function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;

function overlap(cryptogram){
  for(let i=0; i<cryptogram.length; i++){
    if(cryptogram[i]===cryptogram[i+1]){
      return true;
    }
  }
  return false;
}

function remove(cryptogram){
  let cryptogramArr=[...cryptogram];
  let removeString="";
  for(let i=0; i<cryptogramArr.length; i++){
    if(cryptogramArr[i]!==cryptogramArr[i+1] && cryptogramArr[i]!==cryptogramArr[i-1]){
      removeString+=cryptogramArr[i]
    }
  }   
  return removeString;
}

function playRemove(cryptogram){
  while(overlap(cryptogram)){
    cryptogram=remove(cryptogram)
  }
  return cryptogram;
}