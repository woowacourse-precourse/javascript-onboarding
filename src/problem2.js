function problem2(cryptogram) {
  // 예외 처리
  const lowEng  = /^[a-z]+$/;
  if(!lowEng.test(cryptogram)){
    return "소문자만 입력 가능합니다.";
  } else if(!(cryptogram.length >=1 && cryptogram.length <=1000)){
    return "1~1000자의 글자만 입력 가능합니다."
  }

  let result = [];
  for(let i =0;i<cryptogram.length;i++){
    const char = cryptogram[i];
    if(result[result.length-1] === char){
      result.pop()
    } else{
      result.push(char)
    }
  } return result.join('')
}

module.exports = problem2;
