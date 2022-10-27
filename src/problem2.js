function problem2(cryptogram) {
  var answer;

  for(i = 0; i < cryptogram.length; i++) {
    if(cryptogram[i] === cryptogram[i + 1]){//두 문자가 같은지 비교 ex)0번째, 1번째 비교 후 1번째 2번째 비교 
      //cryptogram.substring(0, i) => 0부터 i전까지
      //cryptogram.substring(i + 2, cryptogram.length) => i + 2부터 cryptogram의 길이 즉, 끝까지
      cryptogram = cryptogram.substring(0, i) + cryptogram.substring(i + 2, cryptogram.length);
      return problem2(cryptogram);  //1번 라인으로(재귀)
    }
  }
  //결과값을 answer에 넣음
  answer = cryptogram;

  return answer;
}

module.exports = problem2;
