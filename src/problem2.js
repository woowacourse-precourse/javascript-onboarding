function problem2(cryptogram) {
  if (cryptogram.length <= 1) return cryptogram;
  var answer = removeDup(cryptogram.split(''));
  return answer;
}

module.exports = problem2;


/* 
예외처리
cryptogram 길이가 1일때 빠른리턴

구현
1. 길이가 1인 문자열 예외처리
2. 배열 이용해서 cur인덱스 i와 i+1한 인덱스의 요소 비교해서 같은값인지 확인
3. 같은 값이 있다면 splice로 지움(기존배열은 지운값으로 재할당)
3. 중복값이 없을때까지 2, 3 반복 후 리턴
*/