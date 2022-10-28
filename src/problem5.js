function problem5(money) {
  let arr = [];
  let won = [5e4, 1e4, 5e3, 1e3, 5e2, 1e2, 5e1, 1e1, 1];
 
  /* 돈의 단위가 입력되면 큰 단위부터 나눌 수 있는지 없는 지 확인하고 
  나눌 수 있다면 나누는 기능 */
  const moneyDivide = (unit) => {
    if (money / unit >= 1) {
      arr.push(Math.floor((money / unit)));
    } else if (money / unit < 1) {
      arr.push(0);
    }
    money = money % unit;
  }
}

problem5(50237);
problem5(15000);
// module.exports = problem5;
