// [✅] 잔돈을 의미하는 change 변수 생성
// [✅] result 배열 생성
// [✅] 사용할 화폐의 단위를 담은 배열 생성 -> listAmounts
// [] money를 5만원권으로 나누고 몫은 result[0]에 저장, 나머지는 change에 저장
// [] money를 1만원권으로 나누고 몫은 result[1]에 저장, 나머지는 change에 저장
// [] money를 5천원권으로 나누고 몫은 result[2]에 저장, 나머지는 change에 저장
// [] money를 1천원권으로 나누고 몫은 result[3]에 저장, 나머지는 change에 저장
// [] money를 5백원으로 나누고 몫은 result[4]에 저장, 나머지는 change에 저장
// [] money를 1백원으로 나누고 몫은 result[5]에 저장, 나머지는 change에 저장
// [] money를 50원으로 나누고 몫은 result[6]에 저장, 나머지는 change에 저장
// [] money를 10원으로 나누고 몫은 result[7]에 저장, 나머지는 change에 저장
// [] money를 1원으로 나누고 몫은 result[8]에 저장, 나머지는 change에 저장
// [] result 배열 반환

function problem5(money) {
  let change = 0;
  const result = [];
  const listAmounts = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  console.log(Math.floor(money / listAmounts[0]), money % listAmounts[0]);
  return result;
}

console.log(problem5(50237));

module.exports = problem5;
