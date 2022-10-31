function problem2(cryptogram) {
  var answer=[];

  cryptogram.split('').forEach((el)=>{
    if(answer[answer.length-1]===el){
      answer.pop();
    }else{
      answer.push(el);
    }
  });

  return answer.join('');
}

module.exports = problem2;
