let start = new Date().getTime();
const num = 33333333;
let answer = 0;

for (let i = 1; i <= num; ++i) {
  let temp = i;
  while (temp > 0) {
    if (temp % 10 == 3 || temp % 10 == 6 || temp % 10 == 9) {
      answer++;
    }
    temp = parseInt(temp / 10);
  }
}

console.log(answer);
let end = new Date().getTime();

console.log("성능 비교 : ", end - start);
