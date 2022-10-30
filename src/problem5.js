function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let wallet = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for(let i=0; i<unit.length; i++) {
    while(unit[i] <= money) {
      money -= unit[i];
      wallet[i]++;
    }
  } 
  return wallet;
}

module.exports = problem5;