function problem3(number) {
  // 3, 6, 9를 상수로 선언해준다.
  const NUMBER = ['3', '6', '9'];
  let answer = 0;

  // number까지 반복문을 실행한다.
  for(let i = 1; i <= number; i++) {
    // 해당 숫자를 문자열 배열로 변환한다.
    const numberArray = [...String(i)];
    // 배열을 돌면서 3,6,9가 있다면 answer에 1을 더해준다.
    numberArray.forEach((el) => {
      if(NUMBER.includes(el)) answer++;
    });
  }

  return answer;
}

module.exports = problem3;
