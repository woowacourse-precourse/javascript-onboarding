function problem5(money) {
  return [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1].map((el) => {
    let mok = Math.floor(money / el);
    money = money % el;
    return mok;
  });
}

module.exports = problem5;
