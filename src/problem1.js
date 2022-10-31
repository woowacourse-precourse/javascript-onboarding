// **기능 요구 사항**
// 책을 임의로 펼친다.
// 1. 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
// 2. 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
// 3. 1~2 과정에서 가장 큰 수를 본인의 점수로 한다.
// 4. 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
// 5. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.
// 6. 배열 pobi와 crong이 주어질 때, 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return


function problem1(pobi, crong) {
  let a = [97, 98];
  let b = [197, 198];
  let sum_a = 0;
  let multiple_a = 1;
  let sum_b = 0;
  let multiple_b = 1;

  a = a.toString().split('');

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== ',') {
      sum_a += parseInt(a[i])
      multiple_a *= parseInt(a[i])
    }
  }

  b = b.toString().split('');

  for (let i = 0; i < b.length; i++) {
    if (b[i] !== ',') {
      sum_b += parseInt(b[i])
      multiple_b *= parseInt(b[i])
    }
  }

  console.log(a, b, sum_a, sum_b, multiple_a, multiple_a)
}

module.exports = problem1;

problem1()
