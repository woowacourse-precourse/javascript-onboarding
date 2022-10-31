/**
 * 돈이 각 화폐당 몇 개로 변환되는지를 반환합니다.
 * @param {number} money 변환할 금액입니다.
 * @returns {number[]} 금액이 큰 순서대로 정렬된 변환된 화폐의 개수 배열입니다.
 */
function problem5(money) {
  const answer = [];
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (const c of currency) {
    // 몫과 나머지를 구해 저장합니다.
    let [quotient, remainder] = [parseInt(money / c), money % c];

    // 화폐로 나눈 몫을 배열에 저장합니다.
    answer.push(quotient);
    // 화폐로 나눈 나머지를 money에 대입합니다.
    money = remainder;
  }

  return answer;
}

module.exports = problem5;
