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

function decryption(data){
  let result = ''
  for(let i =0; i<data.length;i++){
    if(data[i]===data[i+1]){
     i=i+1
    }
    else{
     result += data[i];
    }
  }
  return result
}
module.exports = problem2;
