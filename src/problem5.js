function problem5(money) {
  var answer;
  let money_cnt=[];//각 동전의 갯수를 카운트할 배열 생성 
  //동전의 갯수=money/동전 
  //남은돈 =money%동전
  money_cnt[0]=parseInt(money/50000);
  money=parseInt(money%50000);

  money_cnt[1]=parseInt(money/10000);
  money=parseInt(money%10000);

  money_cnt[2]=parseInt(money/5000);
  money=parseInt(money%5000);
 
  money_cnt[3]=parseInt(money/1000);
  money=parseInt(money%1000);

  money_cnt[4]=parseInt(money/500);
  money=parseInt(money%500);

  money_cnt[5]=parseInt(money/100);
  money=parseInt(money%100);
 
  money_cnt[6]=parseInt(money/50);
  money=parseInt(money%50);

  money_cnt[7]=parseInt(money/10);//10원짜리 동전의 갯수

  money_cnt[8]=parseInt(money%10);//1원짜리 동전의 갯수 = 10원으로 나눈 나머지

  
  answer=money_cnt;
  return answer;
}

module.exports = problem5;
