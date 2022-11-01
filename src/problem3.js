function problem3(number) {
  // 게임의 기준이 되는 3, 6, 9를 배열로 할당
  const game = [3, 6, 9];
  // 손뼉을 칠 횟수를 할당할 변수 선언
  let count = 0;
  // 1부터 전달인자로 주어진 number까지 반복
  for (let i = 1; i <= number; i++) {
    // 주어진 숫자 i의 각 자릿수를 분리하여 배열로 만들어 해당 숫자가 3, 6, 9에 해당하는 수만 필터링
    const arr = String(i)
      .split("")
      .map((el) => +el)
      .filter((el) => game.indexOf(el) >= 0);
    // 필터링한 배열의 요소 개수를 카운트에 더한다
    count += arr.length;
  }
  return count;
}

module.exports = problem3;
