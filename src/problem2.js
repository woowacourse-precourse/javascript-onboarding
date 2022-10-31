//1. 유사배열객체->배열
//2. 뒤에 오는 문자와 같은 문자가 아니면 새로운 배열에 푸시
//3. 새로운 배열 문자열로 만들기
//4. 새로운 값이 중복된 값이 없다면 (input과 같다면) 그대로 반환
//5. 중복된 값있을 경우 재귀


function problem2(cryptogram) {
  let answer;
  let lettersArray = Array.from(cryptogram);
  let newArray = [];

  for (let i = 0; i < lettersArray.length; i++) {
    if (lettersArray[i] !== lettersArray[i + 1]) {
      newArray.push(lettersArray[i]);
    } else i++;
  }

  if (newArray.join('') === cryptogram) {
    answer = newArray.join('');
  } else {
    return problem2(newArray.join(''))
  }

  return answer;
}

module.exports = problem2;
