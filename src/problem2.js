function problem2(cryptogram) {
  var answer;

  const crypto_arr = [...cryptogram];

  // 1. cryptogram 문자열의 문자들을 각각 배열로 변경
  // 2. 배열의 값이 [i] == [i+1] 일때 동일한 문자 삭제
  const crypto_result = cryptoSplice(crypto_arr);

  function cryptoSplice(crypto_arr) {
    for(let i=0; i<crypto_arr.length; i++) {
      for(let j=0; j<crypto_arr.length; j++) {
        if(crypto_arr[j] == crypto_arr[j+1]) {
          crypto_arr.splice(j, 2);
          console.log(crypto_arr);
          // 배열의 요소가 계속 변경됨에 따라 배열의 인덱스 값을 0으로 고정
          i--;
        }
      }
    }
    return crypto_arr.join('');
  }

  answer = crypto_result;
  return answer;
}

module.exports = problem2;
