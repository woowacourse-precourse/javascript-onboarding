function problem7(user, friends, visitors) {
  var answer;
  let nameList = []; //사람들 이름 목록 리스트
  let friendsList = []; //사람들 각자의 친구관계 리스트

  for (var friend of friends){
    let idA = friend[0];
    let idB = friend[1];

    const indexA = nameList.indexOf(idA);
    if(indexA!=-1){//아이디A의 친구목록이 존재하다면, 친구 목록에 아이디B 추가
      friendsList[indexA].push(idB);
    }
    else{
      nameList.push(idA); //아이디A의 친구목록 생성 후 아이디B 추가
      let newIndexA = nameList.length-1;
      friendsList[newIndexA] = [idB];
    }

    const indexB = nameList.indexOf(idB);
    if(indexB!=-1){
      friendsList[indexB].push(idA);
    }
    else{
      nameList.push(idB);
      let newIndexB = nameList.length-1;
      friendsList[newIndexB] = [idA];
    }
  }

  //출력
  for (var i=0; i<nameList.length; i++){
    console.log(nameList[i],"의 친구 목록 : ",friendsList[i]);
  }

  let recommendedUserList = []; //점수가 있는 사용자 리스트
  let recommendedUserScore = []; //각 사용자의 추천 점수
  const indexUser = nameList.indexOf(user);
  if(indexUser!=-1){
    let userFriendsList = friendsList[indexUser]; //user의 친구목록
    for (var userFriend of userFriendsList){
      const index = nameList.indexOf(userFriend);
      if(index!=-1){
        for(var FOAF of friendsList[index]){ //user 친구의 친구(FOAF) 목록 보기 (단, FOAF가 user와 친구인지는 판단X)
          const indexFOAF = recommendedUserList.indexOf(FOAF);
          if(FOAF == user){ //user는 PASS
            continue; 
          }
          if(indexFOAF != -1){ //FOAF가 점수 유저 목록에 있다면 점수 +10점
            recommendedUserScore[indexFOAF] += 10;
          }
          else{ //점수 목록 생성 후 점수 초기화(10점)
            recommendedUserList.push(FOAF);
            let newIndexFOAF = recommendedUserList.length-1;
            recommendedUserScore[newIndexFOAF] = 10; //push와 동일
          }
        }
      }   
    }
  }  
  
  return answer;
}

module.exports = problem7;
