var cryptogram = "browoanoommnaon";
/*
var crypto_arr = cryptogram.split('').map(x=>parseInt(x));
var fil = crypto_arr.filter((x,index)=>{return x !== crypto_arr[index-1];
})
console.log(fil);
*/

function problem2(cryptogram) {
  var answer;
  var len = cryptogram.length;
  var new_crypto;
  for(var i =1; i<len; i++){
    if(cryptogram[i]=cryptogram[i-1]){
      if(i=1){
        new_crypto = cryptogram.slice(2,len-2);
      } else{
      new_crypto = cryptogram.slice(0,i-2);
      i=i-2;}
    } 
  }
  answer = cryptogram;
  return answer;
}


module.exports = problem2;
console.log(problem2(crypto));