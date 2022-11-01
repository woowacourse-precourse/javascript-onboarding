// [✅] cryptogram을 split('')하여 배열로 변환
// [✅] cryptogram를 순회하면서 특정 index의 문자가 index + 1의 문자가 일치하는지 찾기
// [✅] 연속된 중복문자를 splice하여 cryptogram 속에서 제거
// [] 중복문자가 없을 때 까지 위의 과정 반복 후 result 반환

function problem2(cryptogram) {
  const result = cryptogram.split('');
  while (result.length >= 6) {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === result[i + 1]) {
        result.splice(i, 2);
      }
    }
  }
  return result;
}

console.log(problem2('browoanoommnaon'));

module.exports = problem2;
