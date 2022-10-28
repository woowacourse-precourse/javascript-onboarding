function problem5(money) {
  var answer;
  let coins = [0,0,0,0,0,0,0,0,0];

  while(money>0){
    if(money >= 50000){
      money -= 50000;
      
    }else if(money >= 10000){
      money -= 10000;

    }else if(money >= 5000){
      money -= 5000;

    }else if(money >= 1000){
      money -= 1000;

    }else if(money >= 500){
      money -= 500;

    }else if(money >= 100){
      money -= 100;

    }else if(money >= 50){
      money -= 50;

    }else if(money >= 10){
      money -= 10;

    }else{
      money --;

    }

  }

  return answer;
}

module.exports = problem5;
