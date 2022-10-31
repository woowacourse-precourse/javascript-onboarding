function problem7(user, friends, visitors) {
  var answer;
  let FR=[];
  for(let i=0;i<friends.length;i++){//user와 친구인 friends 찾기
    if(friends[i][0]===user){
      FR.push(frineds[i][1]);
    }
    if(friends[i][1]===user){
      FR.push(friends[i][0]);
    }
  }
  let FR_FR=[];
  for(let i=0;i<FR.length;i++){//친구의 친구 저장
    for(let j=0;j<friends.length;j++){
      if(FR[i]===friends[j][1]){
        FR_FR.push(friends[j][0]);
      }
      if(FR[i]===friends[j][0]){
        FR_FR.push(friends[j][1]);
      }
    }
  }
  
  let FR_FR_Score;
  FR_FR_Score= new Set(FR_FR);//중복제거
  FR_FR_Score.delete(user);//user 제거
  let FR_Score= new Array(FR_FR_Score.length);
  FR_FR_Score=[...FR_FR_Score];
  for(let i=0;i<FR_FR_Score.length;i++){
    FR_Score[i]=[0, FR_FR_Score[i]];//점수를 저장할 2차원 배열 생성
  }
 
  for(let i=0;i<FR_Score.length;i++){
    for(let j=0;j<FR_FR.length;j++){
      if(FR_Score[i][1]===FR_FR[j]){//친구의 친구 수만큼 비교 후 점수 저장
        FR_Score[i][0]+=10;
      }
    }
  }
  
  let visitor_FR=new Set(visitors);
  visitor_FR=[...visitor_FR];
  let visitor_FR_Score=new Array(visitor_FR.length);//방문자 점수를 저장할 배열 생성
  for(let i=0;i<visitor_FR.length;i++){//방문자와 점수를 저장할 2차원 배열 생성
    visitor_FR_Score[i]=[0,visitor_FR[i]];
  }
  for(let i=0;i<visitor_FR_Score.length;i++){
    for(let j=0;j<visitors.length;j++){
      if(visitor_FR_Score[i][1]===visitors[j]){//방문 횟수마다 점수 저장
          visitor_FR_Score[i][0]+=1;
      }
    }
  }
  let result_Score=FR_Score.concat(visitor_FR_Score);//최종 추천 친구와 점수 
  for(let i=0;i<result_Score.length-1;i++){//리스트에 user의 친구와 visitor가 중복확인
    for(let j=i+1;j<result_Score.length;j++){
      if(result_Score[i][1]===result_Score[j][1]){
        result_Score[i][0]+=result_Score[j][0];//중복이 있다면 점수합산
        result_Score.splice(j,1);//점수 합산 후 삭제
      }
    }
  }
  result_Score.sort((a, b)=>{//배열 정렬
   if(a[0]>b[0]){//점수가 큰순서로 정렬
    return -1;
   }
   else if(a[0]<b[0]){
    return 1;
   }
   else{// 점수가 같다면 이름순으로 정렬
    if(a[1]>b[1]){
      return 1;
    }
    else{
      return -1;
    }
   }
  });

  return answer;
}
module.exports = problem7;
