function problem7(user, friends, visitors) {
  var answer;
  var myfriends=[];
  var f_friends=[];
  var f_name;
  var before_result=[];
  var result=[];

  //내친구를 찾아서 배열로 저장
  for(let i=0; i<friends.length; i++){
    for(let j=0; j<friends[0].length; j++){
      if(friends[i][j]==user && j==1){
        myfriends.push(friends[i][j-1]);
      }
      else if(friends[i][j]==user && j==0){
        myfriends.push(friends[i][j+1]);
      }
    }
  }

  //사용자와 함께 아는친구를 찾아서 배열로 저장 & 10점의 점수 부여
  for(let m=0; m<myfriends.length; m++){
    for(let i=0; i<friends.length; i++){
      for(let j=0; j<friends[0].length; j++){
        if(myfriends[m]==friends[i][j] && j==0){
          f_name=friends[i][j+1];
          if(f_name!=user){
            for(let i=0; i<10; i++){
              f_friends.push(f_name);
            }
          }
        }
        else if(myfriends[m]==friends[i][j] && j==1){
          f_name=friends[i][j-1];
          if(f_name!=user){
            for(let i=0; i<10; i++){
              f_friends.push(f_name);
            }
          }
        }

      }
    }
  }

  //사용자의 타임라인에 방문한 사람에게 1점 부여
  for(let i=0; i<visitors.length; i++){
    if(myfriends.includes(visitors[i])==false){
      f_friends.push(visitors[i]);
    }
  }
  //점수가 높은 친구순서대로 추천 및 이름순 정렬을 조건 충족
  f_friends.sort();

  const f_result ={};
  f_friends.forEach((x)=>{
    f_result[x]=(f_result[x] || 0)+1;
  });

  const newObj = Object.fromEntries(
    Object.entries(f_result).sort(([,a],[,b]) => a > b? -1:1 )
  );

  for(variable in newObj){
    before_result.push(variable);
  }

  //최대 5명의 친구 추천
  if(before_result.length>5){
    for(let i=0; i<5; i++){
      result.push(before_result[i]);
    }
  }
  else{
    result=before_result;
  }

  answer=result;
  return answer;
}

module.exports = problem7;
