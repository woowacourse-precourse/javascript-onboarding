function problem5(money) {
  var answer = [];
  const bill = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];


  const calcula = bill.map((rest) => {
    if (money >= rest) {
      let a = 0;
      a = Math.floor( money / rest );
      answer.push(a);
      money -= a * rest;
    } else {
      answer.push(0);
    }
  });

  return answer;
}

module.exports = problem5;