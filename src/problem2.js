/* 
1. 앞의 문자와 동일한지 여부를 따지는 flag와 연속이지 않은 문자열을 넣을 배열을 생성
2. 앞, 뒤 문자열이 같으면 flag => true, 다르면 배열에 넣어준다.
3. flag가 true인 경우 앞에 넣은 문자를 배열에서 삭제
4. 2, 3을 반복
5. 문자열이 대칭형(회문)인 경우 마지막 요소를 삭제가 안되므로 for문이 끝난 후 삭제
*/

function problem2(cryptogram) {
  let changeFlag = false;
  let str = [];
  for (let idx = 0; idx < cryptogram.length; idx++) {
    if (str[str.length - 1] === cryptogram[idx]) {
      changeFlag = true;
      continue;
    }
  }
  return answer;
}

module.exports = problem2;
