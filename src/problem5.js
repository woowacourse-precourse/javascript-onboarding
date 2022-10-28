function problem5(money) {
  let moneyNum = money;
  const moneyCount = {
    오만원: 0,
    만원: 0,
    오천원: 0,
    천원: 0,
    오백원: 0,
    백원: 0,
    오십원: 0,
    십원: 0,
    일원: 0,
  };

  if (moneyNum > 50000 || moneyNum === 50000) {
    moneyCount["오만원"] = parseInt(moneyNum / 50000);
    moneyNum = moneyNum % 50000;
  }
  if (moneyNum > 10000 || moneyNum === 10000) {
    moneyCount["만원"] = parseInt(moneyNum / 10000);
    moneyNum = moneyNum % 10000;
  }
  if (moneyNum > 5000 || moneyNum === 5000) {
    moneyCount["오천원"] = parseInt(moneyNum / 5000);
    moneyNum = moneyNum % 5000;
  }
  if (moneyNum > 1000 || moneyNum === 1000) {
    moneyCount["천원"] = parseInt(moneyNum / 1000);
    moneyNum = moneyNum % 1000;
  }
  if (moneyNum > 500 || moneyNum === 500) {
    moneyCount["오백원"] = parseInt(moneyNum / 500);
    moneyNum = moneyNum % 500;
  }
  if (moneyNum > 100 || moneyNum === 100) {
    moneyCount["백원"] = parseInt(moneyNum / 100);
    moneyNum = moneyNum % 100;
  }
  if (moneyNum > 50 || moneyNum === 50) {
    moneyCount["오십원"] = parseInt(moneyNum / 50);
    moneyNum = moneyNum % 50;
  }
  if (moneyNum > 10 || moneyNum === 10) {
    moneyCount["십원"] = parseInt(moneyNum / 10);
    moneyNum = moneyNum % 10;
  }
  if (moneyNum > 1 || moneyNum === 1) {
    moneyCount["일원"] = parseInt(moneyNum / 1);
    moneyNum = moneyNum % 1;
  }

  let answer = [
    moneyCount["오만원"],
    moneyCount["만원"],
    moneyCount["오천원"],
    moneyCount["천원"],
    moneyCount["오백원"],
    moneyCount["백원"],
    moneyCount["오십원"],
    moneyCount["십원"],
    moneyCount["일원"],
  ];
  return answer;
}

module.exports = problem5;
