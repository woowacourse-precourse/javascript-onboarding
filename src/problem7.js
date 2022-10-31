function problem7(user, friends, visitors) {
  var answer = [];
  let nameList = []; //사용자 이름 리스트
  let friendsList = []; //사용자 각자의 친구관계 리스트

  //친구 관계 정리
  for (var friend of friends){
    let idA = friend[0];
    let idB = friend[1];

    const indexA = nameList.indexOf(idA);
    if(indexA!=-1){//아이디A의 친구목록이 존재하다면, 친구 목록에 아이디B 추가
      friendsList[indexA].push(idB);
    }
    else{
      nameList.push(idA); //아이디A의 친구목록 생성 후 아이디B 추가
      friendsList.push([idB]);
    }

    const indexB = nameList.indexOf(idB);
    if(indexB!=-1){
      friendsList[indexB].push(idA);
    }
    else{
      nameList.push(idB);
      friendsList.push([idA]);
    }
  }

  //사용자와 함께 아는 친구 점수 부여
  let recommendedUserList = []; //점수를 부여할 사용자 리스트
  let recommendedUserScore = []; //각 사용자의 추천 점수
  const indexUser = nameList.indexOf(user);
  let userFriendsList = friendsList[indexUser]; //user의 친구목록
  if(indexUser!=-1){
    for (var userFriend of userFriendsList){
      const index = nameList.indexOf(userFriend);
      if(index!=-1){
        for(var FOAF of friendsList[index]){ //user 친구의 친구(FOAF) 목록 보기 (FOAF가 user와 친구인지는 판단X)
          const indexFOAF = recommendedUserList.indexOf(FOAF);
          if(FOAF == user){ //user 본인은 PASS
            continue; 
          }
          if(indexFOAF != -1){ //FOAF가 점수 유저 목록에 있다면 점수 +10점
            recommendedUserScore[indexFOAF] += 10;
          }
          else{ //점수 목록 생성 후 점수 초기화(10점)
            recommendedUserList.push(FOAF);
            recommendedUserScore.push(10);
          }
        }
      }   
    }
  }

  //사용자의 타임 라인에 방문한 횟수에 따른 점수 계산
  for (var visitor of visitors){
    const indexVisitor = recommendedUserList.indexOf(visitor);
    if(visitor == user){ //방문자가 user 본인이면 pass
      continue;
    }
    if(indexVisitor!=-1){
      recommendedUserScore[indexVisitor] += 1;
    }
    else{
      recommendedUserList.push(visitor);
      recommendedUserScore.push(1);
    }
  }

  let resultUserAndScore = []; //점수 계산이 완료된 사용자들의 이름과 점수를 하나로 묶은 list
  for (var i=0; i<recommendedUserList.length; i++){
    let nowRecommendedUser = recommendedUserList[i];
    let nowRecommendedScore = recommendedUserScore[i];
    let userFriendIndex = userFriendsList.indexOf(nowRecommendedUser);
    if(userFriendIndex!=-1 || nowRecommendedScore==0){ //user와 이미 친구 or 점수가 0점이면 제외
      continue;
    }
    resultUserAndScore.push([recommendedUserList[i], recommendedUserScore[i]]);
  }

  resultUserAndScore.sort(function(userAndScore1, userAndScore2) {
    let user1 = userAndScore1[0];
    let score1 = userAndScore1[1];

    let user2 = userAndScore2[0];
    let score2 = userAndScore2[1];

    if(score1 > score2) return -1;
    if(score1 < score2) return 1;
    if(score1 == score2) return user1 < user2 ? -1 : 1; //점수가 같으면 알파벳순 정렬
  })
  
  for (var userAndScore of resultUserAndScore){
    let topUser = userAndScore[0];
    answer.push(topUser);
    if(answer.length == 5){
      break;
    }
  }
  
  return answer;
}

module.exports = problem7;
