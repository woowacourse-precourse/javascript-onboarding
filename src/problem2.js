function problem2(cryptogram) {
  let result = [];
  for(let i =0;i<cryptogram.length;i++){
    const char = cryptogram[i];
    if(result[result.length-1] === char){
      result.pop()
    } else{
      result.push(char)
    }
  } return result
}


module.exports = problem2;
