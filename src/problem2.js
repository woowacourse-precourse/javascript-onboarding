function problem2(cryptogram) {
  let arr = cryptogram.split("");
  let answer = [];

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
