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
};

module.exports = _;
