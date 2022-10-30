function problem5(money) {
  //돈 범위
  const moneyRange = (money) => {
    if(money < 1 || money > 1000000 ) return false;
    else return true;
  };
}

module.exports = problem5;
