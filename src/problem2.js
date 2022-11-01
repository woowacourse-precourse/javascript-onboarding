// [✅] 중복 문자를 담을 duplicateCharacters 배열 생성
// [✅] map으로 순환하기 위해 cryptogram을 split('')하여 배열로 변환
// [] cryptogram를 순회하면서 특정 index의 문자를 duplicateCharacters에 담고 index + 1의 문자가 일치하는지 찾기
// [] 연속적으로 중복된 문자가 발견된다면 해당 부분을 duplicateCharacters 배열에 저장한다.
// [] 연속된 중복문자를 replace하여 공백으로 변환한다. (cryptogram 속에서 제거)
// [] 한 차례 검사가 끝났다면, cryptogram.join('') 으로 공백을 제거한다.
// [] 중복문자가 없을 때 까지 위의 과정 반복 후 result 반환

function problem2(cryptogram) {
  const duplicateCharacters = [];
  const result = cryptogram.split('');
  // cryptogram.map((alphabet) => console.log(alphabet));
  return result;
}

console.log(problem2('browoanoommnaon'));

module.exports = problem2;
