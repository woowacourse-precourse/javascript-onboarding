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
  FR_FR= new Set(FR_FR);//중복제거
 /* for(let i=0;i<visitors.length;i++){
    for(let j=0;j<FR_Score.length;j++){
      if(visitors===FR_Score[j][1]){

      }
    }
  }
  return answer;*/
}

module.exports = problem7;
