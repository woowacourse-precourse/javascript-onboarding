function getDecodingArr(cryptogram) {
  let curOverlap = null;

  const decodingArr = Array.from(cryptogram).reduce((acc,cur)=>{
    
    if(curOverlap === cur){
      return acc;
    }
    
    if(acc[acc.length-1] === cur){
      curOverlap = cur;
      return acc.slice(0, -1);
    }

    curOverlap = null;
    return [...acc, cur];
  },[]);

  return decodingArr;
}

function problem2(cryptogram) {
  const decodingArr = getDecodingArr(cryptogram);
  return decodingArr.join('');
}

module.exports = problem2;
