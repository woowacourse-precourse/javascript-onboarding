// 화폐 단위를 배열로 미리 선언 후 사용해 최소의 화폐 개수를 반환하는 함수
function withDraw(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let wallet = [];

  for (let unit of units) {
    wallet.push(parseInt(money / unit));
    money %= unit;
  }

  return wallet;
}

function problem5(money) {
  const answer = withDraw(money);

  return answer;
}

module.exports = problem5;
