function problem2(cryptogram) {
  let arr = cryptogram.split("");
  let answer = [];

  //예외처리
  let firstStrValue = cryptogram.charAt(0);
    if(firstStrValue === firstStrValue.toLowerCase()) {
        return answer.join("");
    }
    if(cryptogram.length<1 || cryptogram.length>1000)
        return answer.join("");
        
  for(let str of arr){
      if(answer[answer.length - 1] === str){
          answer.pop();
      } else {
          answer.push(str);
      }
  }

  return answer.join("");
}

module.exports = problem2;
