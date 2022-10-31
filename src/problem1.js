function problem1(pobi, crong) {
  let answer=0;
  
  //let PobiScore=[];
  //let CrongScore=[];
  let pobi_max=0;//포비의 비교값
  let pobi_ans=0;//포비의 최종 최대값
  for(let i=0;i<2;i++){
    let pobi_sum=0;//포비의 각 자리수의 합 
    let pobi_mul=1;//포비의 각 자리수의 곱
    let val=pobi[i];
    while(val!=0){
      pobi_sum+=val%10;
      pobi_mul*=val%10;
      val = parseInt(val / 10);
    }
    pobi_max=Math.max(pobi_sum,pobi_mul);//포비의 최대값 찾기
    pobi_ans=Math.max(pobi_ans,pobi_max);//포비의 최대값 비교
  }
  let crong_max=0;//크롱의 비교값
  let crong_ans=0;//크롱의 최종 최대값
  for(let i=0;i<2;i++){
    let crong_sum=0;//크롱의 각 자리수의 합 
    let crong_mul=1;//크롱의 각 자리수의 곱
    let val=crong[i];
    while(val!=0){
      crong_sum+=val%10;
      crong_mul*=val%10;
      val = parseInt(val / 10);
    }
    crong_max=Math.max(crong_sum,crong_mul);//크롱의 최대값 찾기
    crong_ans=Math.max(crong_ans,crong_max);//크롱의 최대값 비교
  }
  if(pobi[1]-pobi[0]==1 && crong[1]-crong[0]==1){
    if(pobi_ans>crong_ans) {
      answer=1;
    }
    else if(pobi_ans<crong_ans) {
      answer=2;
    }
    else {
      answer=0;
    }
  }
  else{//예외사항
    answer=-1;
  }
  return answer;
}


module.exports = problem1;
