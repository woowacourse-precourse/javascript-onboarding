function problem3(number) {
  const game = [3, 6, 9];
  let count = 0;
  for (let i = 1; i <= number; i++) {
    const arr = String(i)
      .split("")
      .map((el) => +el)
      .filter((el) => game.indexOf(el) >= 0);
    count += arr.length;
  }
  return count;
}

module.exports = problem3;
