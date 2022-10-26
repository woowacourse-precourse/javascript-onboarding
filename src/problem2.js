let a = "browoanoommnaon"
function problem2(cryptogram) {
  let answer = ''
  let result = decryption(cryptogram)
  
  while(answer !== result){
    answer = result;
    result = decryption(result);
  }
  return result
}

function decryption(cryptogram){
  let result = ''
  for(let i =0; i<cryptogram.length;i++){
    if(cryptogram[i]===cryptogram[i+1]){
     i=i+1
    }
    else{
     result += cryptogram[i];
    }
  }
  return result
}
module.exports = problem2;
