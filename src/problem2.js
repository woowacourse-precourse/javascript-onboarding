function getDecodingArr(cryptogram) {
  const cryptogramArr = Array.from(cryptogram);
  const decodingArr = cryptogramArr.reduce((acc,cur)=>{
    if(acc.length === 0 || acc[acc.length-1] !== cur){
      return [...acc, cur];
    };

    acc.pop();
    return acc;
  },[]);

  return decodingArr;
}

function problem2(cryptogram) {
  let answer;
  
  const decodingArr = getDecodingArr(cryptogram);

  return answer;
}

module.exports = problem2;
