function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const res = [];

  units.forEach(unit => {
    const 몫 = Math.trunc(money / unit);

    res.push(몫);
    money -= unit * 몫; 
  });
 
  return res;
}

module.exports = problem5;
