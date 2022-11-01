function problem2(cryptogram) {
  let answer = cryptogram.split("");
  if (cryptogram.length < 1 || cryptogram.length > 1000) return false;
  for(let x of cryptogram) {
    if(x === x.toUpperCase()) return false;
  }
  

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === answer[i - 1]) {
      let stock = 1;
      let j = i;
      while (answer[j] === answer[j - 1]) {
        stock++;
        j++;
      }
      answer.splice(i - 1, stock);
      i = 0;
    }
  }
  answer = answer.join("");
  return answer;
}
module.exports = problem2;
