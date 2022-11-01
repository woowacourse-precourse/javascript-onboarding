// decoding(): 암호문을 암호 알고리즘에 따라 복호화해주는 함수
function decoding(cryptogram){
  let decodingString = [];

  for(let i=0; i<cryptogram.length; i++){

    if(i === cryptogram.length-1){ // 맨 끝이면
      decodingString.push(cryptogram[i]);
      break;
    }

    if(cryptogram[i] !== cryptogram[i+1]){
      decodingString.push(cryptogram[i]);
      continue;
    }

    if(cryptogram[i] === cryptogram[i+1]){
      next = i+1;
      // 달라질 때 까지 반복
      while(cryptogram[i] === cryptogram[next]){
        next = next + 1;
        if(next >= cryptogram.length){ // 끝을 넘기면 끝까지 반복되는 문자열이므로 종료
          i = cryptogram.length;
          break;
        }
      }
      i = next-1;
    }
  }
  return decodingString.join('');
}

function problem2(cryptogram) {
  let afterString = cryptogram;

  do{
    beforeString = afterString;
    afterString = decoding(beforeString)
  } while (beforeString !== afterString); // 달라지지 않을 때 까지 반복
  
  let answer = afterString; 
  return answer;
}

module.exports = problem2;
