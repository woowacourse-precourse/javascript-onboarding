function problem3(number) {
  let count = 0;
  // 1. 현재 숫자의 각 자리를 쪼개어 하나의 배열로 만드는 기능
  for (let currentNum = 1; currentNum <= number; currentNum++) {
    const numSplitArr = String(currentNum).split('').map((item) => +item);
    // 2. 배열을 순회하면서 3이나 6이나 9인 경우 count를 올리는 기능
    numSplitArr.map((item) => {
      if (item === 3 || item === 6 || item === 9) count++;
    });
  }
  return count;
}

module.exports = problem3;