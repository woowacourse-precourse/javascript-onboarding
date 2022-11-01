function problem1(pobi, crong) {
  // 예외사항: 오른쪽 페이지 - 왼쪽 페이지가 1이 아닌 경우 -1 리턴
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  // 특정 숫자의 모든 자릿수를 더한 수 또는 곱한 수 중 큰 숫자를 리턴하는 함수
  const getLarge = (num) => {
    // 각 자릿수를 배열의 요소로 변환
    const arr = String(num)
      .split("")
      .map((el) => Number(el));
    // 더한 수 또는 곱한 수 중 큰 숫자를 리턴
    return Math.max(
      arr.reduce((a, b) => a + b, 0),
      arr.reduce((a, b) => a * b, 1)
    );
  };

  // 포비와 크롱이 펼친 페이지의 게임 결과: 두 페이지를 각각 getLarge 함수의 인자로 전달
  const pobiMax = Math.max(...pobi.map((el) => getLarge(el)));
  const crongMax = Math.max(...crong.map((el) => getLarge(el)));

  if (pobiMax > crongMax) return 1; // 포비 승리
  else if (pobiMax < crongMax) return 2; // 크롱 승리
  else if (pobiMax === crongMax) return 0; // 무승부
}

module.exports = problem1;
