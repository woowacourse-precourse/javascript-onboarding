const removeDuplication = (string) => {
  const chars = [];

  for(let i = 0; i < string.length; i++){
    if(i+1 < string.length && string[i] === string[i+1]) {
      i++
      continue;
    } 
    chars.push(string[i]);
  }

  return chars.join("");
}

function problem2(cryptogram) {
  var answer = cryptogram;
  while(true){
    const processedCrypto = removeDuplication(answer);
    
    if (processedCrypto === answer) break;
    answer = processedCrypto;
  }
  return answer;
}

module.exports = problem2;
