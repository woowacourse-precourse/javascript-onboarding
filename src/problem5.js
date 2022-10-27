function problem5(money) {
  var answer=[];
  const won = [50000,10000,5000,1000,500,100,50,10,1];

  won.forEach((el)=>{
    answer.push(Math.floor(money/el));
    money%=el;
  });

  return answer;
}

module.exports = problem5;
