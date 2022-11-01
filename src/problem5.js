/*
<풀이>
pay 배열안에 100만원기준으로 50000원부터 1원까지의 길이로 인덱스를 넣어준다.
for문 이용하여 pay배열의 원소들을 하나씩 뽑아준다.
money에 있는 값을 pay배열의 각 원소값으로 나눴을때 소수점을 빼고 total_number변수의 빈 배열에 넣어준다.
money에 있는 값을 pay배열의 각 원소값으로 나눴을때 나머지값으로 원소값을 바꾼다. 
*/

function problem5(money) {
  let total_number = [];
  let pay = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < pay.length; i++) {
    total_number.push(Math.floor(money / pay[i]));
    money %= pay[i];
  }

  return total_number;
}

module.exports = problem5;
