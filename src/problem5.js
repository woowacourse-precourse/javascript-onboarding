/*
요구사항 1. 큰 금액의 화폐 위주로 바꿈
>> 큰 금액부터 몫과 나머지 연산으로 처리
*/

function problem5(money) {
  const face_value = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = new Array(face_value.length);

  for (let i=0; i<face_value.length; i++)
  {
    let remainder = money % face_value[i];
    answer[i] = (money - remainder) / face_value[i];
    money = remainder;
  }

  return answer;
}

module.exports = problem5;
