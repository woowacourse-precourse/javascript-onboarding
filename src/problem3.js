function problem3(number) {
  let answer = 0;
  const number_add = [];
  const last_add = [];
  // console.log(number)
  // 필요한 빈 배열 생성

  for (i = 1; i <= number; i++) {
    let n = i;
    do {
      number_add.push(n % 10);
      n = Math.floor(n / 10);
    } while (n > 0);
  }
  // console.log("숫자 확인",number_add)
  // 숫자가 입력됬을때 각 자리수 배열로 넣기

  for (i = 0; i < number_add.length; i++) {
    if (
      number_add[i] == 3
      || number_add[i] == 6
      || number_add[i] == 9
    ) {
      answer += 1;
    }
  }

  // console.log("마지막 배열",answer)
  // 3,6,9 갯수 세기

  return answer;
}

module.exports = problem3;
