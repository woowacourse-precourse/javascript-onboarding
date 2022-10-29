function problem2(cryptogram) {
  let answer;
  let check = true;
  let alpha_arr = getAlphaArray();

  while (check){
    check = false;
    if (cryptogram.length <= 1) {
      return cryptogram;
    }
  }
  return answer
}

function getAlphaArray(){
  let alpha_arr = [];
  for (let i=97; i<=122; i++){
    // 아스키코드를 문자(a~z)로 변환 후 배열에 저장 
    alpha_arr.push(String.fromCodePoint(i));
  }
  return alpha_arr;
}

module.exports = problem2;