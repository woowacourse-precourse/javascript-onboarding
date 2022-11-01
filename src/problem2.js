function problem2(cryptogram) {
  var answer = cryptogram.split("");

  for(let i = 0; i < answer.length; i++){
    answer.forEach((element,index) => {
      if(answer[index+1] === undefined) return
      if(element === answer[index+1]){
        answer.splice(index,2);
        i = 0;
      }
    });
  }
  
  return answer.join("");
}

module.exports = problem2;
