function convertMoney(unit_num,money,answer){
  let convert_money = parseInt(money/unit_num)
  let unit_cnt = 0;
  if(convert_money==0){
    answer.push(0)
  }
  else{
    unit_cnt = convert_money;
    answer.push(unit_cnt);
    money = parseInt(money%unit_num);
  }
  return answer,money;
}

function problem5(money) {
  let answer=[];
  let unit = [50000,10000,5000,1000,500,100,50,10,1]
  
  for(let i=0;i<unit.length;i++){
    let unit_num = unit[i]
    if(money>0){
      answer,money = convertMoney(unit_num,money,answer);
    }
    else{
      answer.push(0)
    } 
  }
  return answer;
}

module.exports = problem5;
