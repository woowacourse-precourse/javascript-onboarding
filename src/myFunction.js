const _ = {
  수_분해하기(수) {
    const 결과_배열 = [];

    while (true) {
      const [몫, 나머지] = [Math.trunc(수 / 10), 수 % 10];
      결과_배열.push(나머지);

      if (몫 === 0) {
        return [...결과_배열].reverse();
      }

      수 = 몫;
    }
  },
  더하기(수_배열) {
    return 수_배열.reduce((합, 수) => 합 + 수, 0);
  },
  범위_함수_생성하기(시작, 끝) {
    return (수) => 시작 < 수 && 수 < 끝;
  },
  연속_값_배열_만들기(시작_수, 끝_수, 증감_수) {
    return Array.from(
      { length: (끝_수 - 시작_수) / 증감_수 + 1 },
      (_, 인덱스) => 시작_수 + 인덱스 * 증감_수
    );
  },
};

module.exports = _;
