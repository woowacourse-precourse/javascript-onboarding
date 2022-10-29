function problem5(money) {
  let answer=[0,0,0,0,0,0,0,0,0];
  while(money!=0){
    if (money>=50000){
      cnt=parseInt(money/50000)
      money=money%50000
      answer[0]+=cnt
    }
    else if (money>=10000){
      cnt=parseInt(money/10000)
      money=money%10000
      answer[1]+=cnt
    }
    else if (money>=5000){
      cnt=parseInt(money/5000)
      money=money%5000
      answer[2]+=cnt
    }
    else if (money>=1000){
      cnt=parseInt(money/1000)
      money=money%1000
      answer[3]+=cnt
    }
    else if (money>=500){
      cnt=parseInt(money/500)
      money=money%500
      answer[4]+=cnt
    }
    else if (money>=100){
      cnt=parseInt(money/100)
      money=money%100
      answer[5]+=cnt
    }
    else if (money>=50){
      cnt=parseInt(money/50)
      money=money%50
      answer[6]+=cnt
    }
    else if (money>=10){
      cnt=parseInt(money/10)
      money=money%10
      answer[7]+=cnt
    }
    else{
      cnt=parseInt(money/1)
      money=money%1
      answer[8]+=cnt
      break
    }
  }
  return answer;
}

module.exports = problem5;
