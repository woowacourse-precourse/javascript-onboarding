function problem2(cryptogram) {
  var answer;

  /* 문자열인 str의 index가 start부터 end인 부분을 삭제하는 함수. */
  function remove_string(str, start, end) {
    return str.slice(0, start) + str.slice(end + 1);
  }

  len = cryptogram.length
  for (let i=0; i<=len/2; i++) {
    for (let j=0; j<cryptogram.length - 1; j++) {
      if (cryptogram[j] == cryptogram[j+1])
        cryptogram = remove_string(cryptogram, j, j+1);
        continue
    }
  }
  
  answer = cryptogram;
  return answer;
}

module.exports = problem2;
