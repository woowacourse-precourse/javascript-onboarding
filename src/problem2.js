function eraseCycle(word){
  let answer = [];
  const indexs = [];
  [...word].forEach((letter)=>{
      letter!==answer[answer.length-1]
      ? answer.push(letter)
      : indexs.includes(answer.length-1)||indexs.push(answer.length-1)
  });
  answer = answer.filter((_,index)=>indexs.indexOf(index)===-1);
  return answer.join('');
}

function problem2(cryptogram){
    let result = eraseCycle(cryptogram);
    while(cryptogram!==result){
        [cryptogram, result] = [result, eraseCycle(result)];
    }
    return result;
}

module.exports = problem2;
