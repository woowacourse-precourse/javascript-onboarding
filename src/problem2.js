const decoding = (array) => {
  let result = [...array];
  let check = array.shift();
  let indexArr = [];

  array.forEach((item, index) => { // 중복 문자 탐색
    if(check === item){
      indexArr.push(index);
      indexArr.push(index + 1);
    }
    check = item;
  })

  if(indexArr.length === 0) return result; // 중복 문자 없을 경우 재귀 함수 종료
  const uniqueArr = [...new Set(indexArr)];
  result = result.filter((_, index) => !uniqueArr.includes(index));
  return decoding(result); // 자신을 다시 호출
}

function problem2(cryptogram) {
  const answer = decoding([...cryptogram]); // 배열로 변환한 값으로 함수 호출
  return answer.join(''); // 문자열로 변환
}

module.exports = problem2;
