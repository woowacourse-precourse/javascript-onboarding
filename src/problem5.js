function problem5(money) {
  let answer=new Array(9);
  const moneyType=[50000,10000,5000,1000,500,100,50,10,1];
  for (let i=0;i<9;i++) {
    answer[i]=parseInt(money/moneyType[i]);
    money%=moneyType[i];
  };
  return answer;
};

module.exports = problem5;
