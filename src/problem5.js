function problem5(money) {
  //제한사항
  if (money < 1 || money > 1000000) {
    return "money max = 1,000,000 min = 1"
  }
  let arr = [];
  let bill = 50000;
  let value = money / 50000;
  let exchange = money % 50000;
  //기능 목록2 화폐 단위별 갯수 추출.
  for (let i = 0; i < 8; i++) {
    arr.push(Math.floor(value));
    //기능 목록1 화폐 단위의 변화.
    if (Array.from(String(bill))[0] === '5') {
      bill = bill / 5;
    } else {
      bill = bill / 2;
    }
    value = exchange / bill;
    if (i === 7) {
      arr.push(exchange % 10);
    }
    exchange = exchange % bill;
  }
  return arr;
}

// module.exports = problem5;
