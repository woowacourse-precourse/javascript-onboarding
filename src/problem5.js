function problem5(money) {
  money=Number(money)
  var answer=[];
  let coin=[50000,10000,5000,1000,500,100,50,10,1]
  const GetNumber=(coin)=>{
    let coin_num= parseInt(money/coin)
    money= money%coin;
    answer.push(coin_num)
  }
  coin.map(x=>GetNumber(x))
  return answer;
}
module.exports = problem5;
