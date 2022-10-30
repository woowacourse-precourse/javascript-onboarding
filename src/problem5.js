function problem5(money) {
  const result = [];
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50 , 10, 1]; // 화폐 단위

  unit.map(el=>{
    num = Math.floor(money / el); // 화폐 갯수
    money %= el;ㄴ

    result.push(num);
  })

  return result;
}

module.exports = problem5;
