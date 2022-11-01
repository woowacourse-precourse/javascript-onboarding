const idx = {
  0: 50000,
  1: 10000,
  2: 5000,
  3: 1000,
  4: 500,
  5: 100,
  6: 50,
  7: 10,
  8: 1,
};
let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let money = 50237;

//미리 answer인덱스에 대응하는 금액을 객체로 만들고 기존 money값이 대응하는 값보다 크거나 같다면 반환해준다.
for (let i = 0; i < answer.length; ++i) {
  if (money >= idx[i]) {
    answer[i] = parseInt(money / idx[i]);
    money = money % idx[i];
  }
}

console.log("answer", answer);
