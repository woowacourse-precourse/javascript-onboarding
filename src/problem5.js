function problem5(money) {

  let moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = new Array(9);


  for (let i = 0; i < moneys.length; i++) {
  //  console.log(money , moneys[i]);
    if (i == moneys.length - 1) {
      answer[i] = money;
    }
    else {
      answer[i] = parseInt(money / moneys[i]);
      money = money % moneys[i];
      
    }
   // console.log(answer[i] ,money );
  }

  return answer;
}

module.exports = problem5;
