function problem2(cryptogram) {
  let answer;
  let check = true;
  let alpha_arr = getAlphaArray();

  while (check){
    check = false;
    if (cryptogram.length <= 1) {
      return cryptogram;
    }

    for (let i=0; i<=25; i++){
      str_to_remove = new RegExp(`[${alpha_arr[i]}]{2,}`, 'g'); // 2번 이상 반복되는 문자열을 매칭하기 위한 정규 표현식 
      if (str_to_remove.test(cryptogram)===true){ // 연속하는 중복 문자열이 있다면 계속 진행 
        check = true;
        cryptogram = cryptogram.replace(str_to_remove, ''); // 연속하는 중복 문자열 삭제
      }
    }

  }

  answer = cryptogram;
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