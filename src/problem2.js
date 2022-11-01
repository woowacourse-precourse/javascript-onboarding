function problem2(cryptogram) {
  var answer = solution(cryptogram);
  return answer;
}

function solution(cryptogram){
  cryptogram = Array.from(cryptogram);
  while(true){
    let k_val = cryptogram[0]; // key-value
    let k_indx = 0;            // key-index
    let count = 1;
    let flag = 0;
    cryptogram.forEach((c, index) => {
      if((index != 0 || index == cryptogram.length - 1)&& c === k_val){
        count += 1;
        if(index == cryptogram.length - 1){
          cryptogram.splice(k_indx, count);
        }
      }
      else{
        if(count > 1){
          cryptogram.splice(k_indx, count);
          flag = 1;
          count = 1;
        }
        else{
          k_val = c;
          k_indx = index;
          count = 1;
        }
      }
    });
    
    if(flag == 0 || cryptogram.length === 0){
      break;
    }
  }
  cryptogram = cryptogram.join("");
  return cryptogram;
}
module.exports = problem2;
