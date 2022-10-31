function problem5(money) {
  var answer=[0,0,0,0,0,0,0,0,0];
  while(money>0){
    if(money>=50000){
      answer[0]=parseInt(money/50000);
      money-=50000*answer[0];
    }
    else if (money>=10000){
      answer[1]=parseInt(money/10000);
      money-=10000*answer[1];
    }
    else if (money>=5000){
      answer[2]=parseInt(money/5000);
      money-=5000*answer[2];
    }
    else if (money>=1000){
      answer[3]=parseInt(money/1000);
      money-=1000*answer[3];
    }
    else if (money>=500){
      answer[4]=parseInt(money/500);
      money-=500*answer[4];
    }
    else if (money>=100){
      answer[5]=parseInt(money/100);
      money-=100*answer[5];
    }
    else if (money>=50){
      answer[6]=parseInt(money/50);
      money-=50*answer[6];
    }
    else if (money>=10){
      answer[7]=parseInt(money/10);
      money-=10*answer[7];
    }
    else{
      answer[8]=money;
      money-=answer[8];
    }

  }
  return answer;
}

module.exports = problem5;
