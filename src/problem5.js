function problem5(money) {
  let arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  return arr.map((value) => {
    let count = Math.floor(money / value);
    if (count > 0) {
      money -= value * count;
    }
    return count;
  });
}

module.exports = problem5;
