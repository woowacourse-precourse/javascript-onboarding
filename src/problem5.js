function problem5(money){
  var answer;
  let units = [50000,10000,5000,1000,500,100,50,10,1];
  let num;
  answer = units.map((unit)=>{
      if(money>=unit){
          num = parseInt(money/unit);
          money  %= unit;
          return num;
      }
      else{
          return 0;
      }
  })
  return answer;
}

module.exports = problem5;
