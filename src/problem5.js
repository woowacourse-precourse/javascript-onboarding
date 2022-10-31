function problem5(data) {
  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  let money = data
  let start = 50000;
  for(let i = 0; i<result.length;i++){

    result[i] = parseInt(money/start);
    money = money%start

    if(String(start)[0]==='5' && start>10 ){
      start = start/5
    }
    else if(String(start)[0]==='1'&& start>10 ){
      start = start/2
    }
    else{
      start = start/10
    }
  }

  return result;
}
module.exports = problem5;
