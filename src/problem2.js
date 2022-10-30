function problem2(cryptogram) {
  var answer;
  let count = 0;
  cryptogram = [...cryptogram];

  while(count === 0) {
    count = 1;
    for(let i = cryptogram.length-1; i > 0; i--) {
      let k = i;
      let flag = 0;
      while(cryptogram[k] === cryptogram[k-1]){
        k--;
        flag = 1;
      }
      if(flag === 1) {
        cryptogram.splice(k, i-k+1);
        count = 0;
        i = k;
      }
    }
  }
  answer = cryptogram.join("");
  return answer;
}

module.exports = problem2;
