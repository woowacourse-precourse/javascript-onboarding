function problem5(money) {
  if (typeof money !== 'number') return '숫자를 입력해주세요.';
  if (1 > money || money > 1000000)
    return '금액은 1 이상 1,000,000 이하의 자연수여야 합니다.';
  var answer = new Array(9).fill(0);
  const list = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let count = 0;
  let left = 0;
  while (money) {
    if (money - list[left] >= 0) {
      money = money - list[left];
      count++;
      if (!money) {
        answer[left] = count;
        break;
      }
    } else {
      answer[left] = count;
      left++;
      count = 0;
    }
  }
  return answer;
}
console.log(problem5(-20));
module.exports = problem5;
