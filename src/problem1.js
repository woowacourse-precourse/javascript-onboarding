function problem1(pobi, crong) {
  var answer;
  
  var pobi_leftnum = pobi[0];
  var pobi_rightnum = pobi[1];
  var crong_leftnum = crong[0];
  var crong_rightnum = crong[1];

  var sum_p = 0;
  var mul_p = 1;
  var sum_c = 0;
  var mul_c = 1;

  var sub_p = pobi[1]-pobi[0];
  var sub_c = crong[1]-crong[0];

  var pobi_val =[];
  var pobi_finalval;
  var crong_val =[];
  var crong_finalval;

  //포비의 왼쪽페이지로 나올 수 있는 값
  do {
    sum_p+= pobi_leftnum%10;
    mul_p= mul_p*(pobi_leftnum%10);
    pobi_leftnum=Math.floor(pobi_leftnum/10)

  }while(pobi_leftnum>0);
  //배열에 값 저장
  pobi_val[0]=sum_p;
  pobi_val[1]=mul_p;
  //변수 초기화
  sum_p=0;
  mul_p=1;
  //포비의 오른쪽페이지로 나올 수 있는 값
  do {
    sum_p+= pobi_rightnum%10;
    mul_p= mul_p*(pobi_rightnum%10);
    pobi_rightnum=Math.floor(pobi_rightnum/10)

  }while(pobi_rightnum>0);
  //배열에 값 저장
  pobi_val[2]=sum_p;
  pobi_val[3]=mul_p;
  //포비의 최종값
  pobi_val.sort();
  pobi_finalval=pobi_val[3];


  //크롱의 왼쪽페이지로 나올 수 있는 값
  do {
    sum_c+= crong_leftnum%10;
    mul_c= mul_c*(crong_leftnum%10);
    crong_leftnum=Math.floor(crong_leftnum/10)

  }while(crong_leftnum>0);
  //배열에 값 저장
  crong_val[0]=sum_c;
  crong_val[1]=mul_c;
  //변수 초기화
  sum_c=0;
  mul_c=1;
  
  //크롱의 오른쪽페이지로 나올 수 있는 값
  do {
    sum_c+= crong_rightnum%10;
    mul_c= mul_c*(crong_rightnum%10);
    crong_rightnum=Math.floor(crong_rightnum/10)

  }while(crong_rightnum>0);
  //배열에 값 저장
  crong_val[2]=sum_c;
  crong_val[3]=mul_c;
  //크롱의 최종값
  crong_val.sort();
  crong_finalval=crong_val[3];

  //출력 반환
  if(sub_c >1 || sub_p > 1){
    answer=-1
  }
  else{
    if(pobi_finalval>crong_finalval){
      answer=1;
    }
    else if(pobi_finalval<crong_finalval){
      answer=2;
    }
    else if(pobi_finalval==crong_finalval){
      answer=0;
    }

  }

  return answer;
}

module.exports = problem1;
