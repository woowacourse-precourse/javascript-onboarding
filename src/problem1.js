//유저의 점수를 계산하는 함수
function calculate(user){
  let best=0; //최고 점수를 확인해주는 변수
  for(let i=0; i<user.length; i++){
    let array =[];
    //100점보다 큰경우 
    if(user[i]>=100){
        array.push(Math.floor(user[i]/100));
        user[i]=user[i]%100;
    }
        array.push(Math.floor(user[i]/10));
        user[i]=user[i]%10;
        array.push(user[i]);
        //최고점수 판독 
        best=best<array.reduce((sum,cur)=>sum+cur)?array.reduce((sum,cur)=>sum+cur):best;
        best=best<array.reduce((sum,cur)=>sum*cur)?array.reduce((sum,cur)=>sum*cur):best;
  }
  return best;
}

//예외처리 함수
function check(user){
  //연속된 페이지가 아닌경우 / 첫페이지,마지막페이지를 펼치는 경우
  if(user[1]-user[0]!=1||user[0]<=1||user[1]>=400){
    return 1;
  }
  return 0;
}

function problem1(pobi,crong){
  //예외처리
  if(check(pobi)||check(crong)){
    return -1;
  }
  //유저 점수 계산
  const pobi_score=calculate(pobi);
  const crong_score=calculate(crong);
  
  //최종 점수 판별
  if(pobi_score>crong_score){
      return 1;
  }
  if(pobi_score<crong_score){
      return 2;
  }
  if(pobi_score==crong_score){
      return 0;
  }  
}


module.exports = problem1;
