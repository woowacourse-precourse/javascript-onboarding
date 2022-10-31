function eraseCycle(word){
  let result = [];
  const indexs = [];
  [...word].forEach((letter)=>{
      letter!==result[result.length-1]
      ? result.push(letter)
      : result.includes(result.length-1)||indexs.push(result.length-1)
  });
  result = result.filter((_,index)=>indexs.indexOf(index)===-1);
  return result.join('');
}

function problem2(cryptogram){
    let answer = eraseCycle(cryptogram);
    while(cryptogram!==answer){
        [cryptogram, answer] = [answer, eraseCycle(answer)];
    }
    return answer;
}

module.exports = problem2;
