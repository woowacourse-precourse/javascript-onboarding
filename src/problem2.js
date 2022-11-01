function problem2(cryptogram) {

  //제한사항
  if(cryptogram.length < 1 || cryptogram.length > 1000) return -1;
  for(let lower of cryptogram){
    if(lower === lower.toUpperCase()) return -1;
  }

  //중복 문자 제거하기
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
