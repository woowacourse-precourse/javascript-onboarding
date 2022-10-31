function count(str, i) {
  let cnt = str[i];
  while(i < str.length - 1){
    if(str[i] === str[i + 1]){
      cnt += str[i + 1];
      i++;
    }
    else break;
  }
  return cnt;
}

function problem2(cryptogram) {
 
  return cryptogram;
}

module.exports = problem2;
