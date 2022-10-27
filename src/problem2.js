

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


//전 문자열을 기억한다.
//배열을 순회하면서 앞에 문자랑 뒤에 문자가 같은지 확인해야한다.



module.exports = problem2;
