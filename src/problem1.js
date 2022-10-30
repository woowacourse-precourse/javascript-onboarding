// 배열이 입력되면 큰 수를 구하는 함수 제작
function biggest(arr) {
  // 1. 각 자리수 구하고 더하거나 곱한 수 적용하고 둘 중 최댓값 반환
  const placeValue = arr.map((el) => {
    const elHundreds = Math.floor(el / 100);
    const elTens = Math.floor((el % 100) / 10);
    const elUnits = (el % 100) % 10;
    return Math.max(elHundreds + elTens + elUnits, (elHundreds ? elHundreds : 1) * (elTens ? elTens : 1) * elUnits);
  });
  // 2. Math.max()를 활용해 최댓값 구하고 반환
  return Math.max(...placeValue);
}

function problem1(pobi, crong) {
  let answer;
  // 결과 처리
  const pobiPoint = biggest(pobi);
  const crongPoint = biggest(crong);
  if (pobiPoint > crongPoint) {
    answer = 1;
  } else if (pobiPoint < crongPoint) {
    answer = 2;
  } else if (pobiPoint === crongPoint) {
    answer = 0;
  }

  // 예외처리는 중요하니까 answer의 재할당 위해 예외처리를 마지막
  // 예외처리1: 포비, 크롱의 배열 길이가 2 초과 / 2 미만
  if (pobi.length > 2 || pobi.length < 2 || crong.length > 2 || crong.length < 2) {
    answer = -1;
  }
  // 예외처리2: 포비, 크롱의 배열 각 요소 차이가 1이 아닐 때
  else if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
