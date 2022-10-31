function problem5(money) {
  let answer = [];
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; 
  answer = units.map(unit => {
    const count = Math.floor(money / unit);
    money %= unit;
    return count;
  });
  return answer;
}

module.exports = problem5;
