function problem5(money){
    const units = [50000,10000,5000,1000,500,100,50,10,1];
    let num_coin;
    const answer = units.map((unit)=>{
        if(money>=unit){
            num_coin = parseInt(money/unit);
            money  %= unit;
            return num_coin;
        }
        return 0;
    })
    return answer;
  }

module.exports = problem5;
