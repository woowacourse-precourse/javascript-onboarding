function lastWord(str, idx) {
  return idx === str.length - 1;
}
function sameNext(str, idx) {
  return str[idx] === str[idx + 1];
}
function decrypt(str) {
  let ret = "";
  for (let i = 0; i < str.length; i++) {
    let skip = 0;
    while (sameNext(str, i) && !lastWord(str, i)) {
      skip = 1;
      i++;
    }
    if (!skip) ret += str[i];
  }
  return ret;
}
function problem2(cryptogram) {

  var answer = cryptogram;
  while (1) {
    const decrypted = decrypt(answer);
    if (decrypted === answer) break;
    answer = decrypted;
  }
  
  return answer;
}

module.exports = problem2;