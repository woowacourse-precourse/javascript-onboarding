

function problem2(cryptogram) {

  const cryptoArr = [cryptogram[0]];
  
  for(let i = 1; i < cryptogram.length; i++) {
    if(cryptoArr[cryptoArr.length - 1] !== cryptogram[i]) {
      cryptoArr.push(cryptogram[i]);
    } else {
      cryptoArr.pop();
    }
  }
  return cryptoArr.toString().replace(/,/g,"");
}




module.exports = problem2;
