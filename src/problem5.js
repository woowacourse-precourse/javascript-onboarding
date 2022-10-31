function problem5(money) {
  const kindOfMoney = [50000,10000,5000,1000,500,100,50,10,1]
  let result = [];
  while(money!=0){
    for(let i =0;i<kindOfMoney.length;i++){
      let quo = Math.floor(money/kindOfMoney[i]);
      money = money % kindOfMoney[i]
      result.push(quo)
      
    }

  }
  return result
} 


module.exports = problem5;
