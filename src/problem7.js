  function problem7(user, friends, visitors) {
    //   사용자와 함께 아는 친구의 수 = 10점
    // 사용자의 타임 라인에 방문한 횟수 = 1점
    // 미스터코의 친구 추천 규칙에 따라 점수가 가장 높은 순으로 정렬하여 
    // 최대 5명을 return 하도록 solution 메서드를 완성하라. 
    // 이때 추천 점수가 0점인 경우 추천하지 않으며, 추천 점수가 같은 경우는 이름순으로 정렬한다.
    let userFriends= findIndex(user,friends);////mrko의 친구를 찾고,
    let withoutObj = userFriends.concat(user);//본인과 친구들제외시켜서
    let allFrinds = friendsOfFriends(withoutObj,friends);//본인과 친구들을 제외한 새로운 친구들을 
    let knowFriends = withoutObjfx(withoutObj,allFrinds);//중복제거된 값// andole', 'jun'
    let visitor = withoutObjfx(withoutObj,visitors);
    return scoreFx(knowFriends,visitor);
  }
  function scorePlus(ScoreObj,knowFriends,visitor){
    result = [];
    count=0;
    console.log("ScoreObj : ",ScoreObj);
    console.log("knowFriends : ",knowFriends);
    console.log("visitor : ",visitor);

    for(let l= 0; l < ScoreObj.length;l++){
      for(let i= 0; i < knowFriends.length;i++){
        if(ScoreObj[l].name == knowFriends[i]){
          ScoreObj[l].score += 10;
        }
      }
    }
    for(let l= 0; l < ScoreObj.length;l++){
      for(let i= 0; i < visitor.length;i++){
        if(ScoreObj[l].name == visitor[i]){
          ScoreObj[l].score += 1;
        }
      }
    }
    console.log("ScoreObj : ",ScoreObj);
    for(let j = 0;j<ScoreObj.length;j++){
      result[count++] = ScoreObj[j].name;
    }
    console.log("result : ",result);
    return result;
  }
  function scoreFx(knowFriend,visitor){

    knowFriends = [];
    let duplicateVisit = [];
    for(let o = 0; o< knowFriend.length;o++){//아는친구 중복제거 
      if(!knowFriends.includes(knowFriend[o])) knowFriends.push(knowFriend[o]);
    }
    for(let t = 0; t< visitor.length;t++){//아는친구 중복제거 
      if(!duplicateVisit.includes(visitor[t])) duplicateVisit.push(visitor[t]);
    }

    // console.log(knowFriends);
    // console.log(duplicateVisit);//한개의 visit
    //중복제거
    let allObj = [];
    let ScoreObj = [];
    for (let i = 0;i < knowFriends.length;i++){
      allObj.push(knowFriends[i]); 
    };
    
    for (let j = 0;j < duplicateVisit.length;j++){
      allObj.push(duplicateVisit[j]); 
    };
    for(let t = 0; t< visitor.length;t++){// 중복제거 
      if(!duplicateVisit.includes(visitor[t])) duplicateVisit.push(visitor[t]);
    }



    for(let l = 0;l< allObj.length;l++){//객체생성
      if(!ScoreObj.includes(allObj[l])){
        ScoreObj.push(
          new Object({
            name : `${allObj[l]}`,
            score : 0
          })
        )
      } 
    };


    let news = [];
    let newsCount = 0;
    for(s=0; s < knowFriends.length ;s++){
      news[newsCount++] = knowFriends[s];
    }
    for(u=0; u < visitor.length ;u++){
      news[newsCount++] = visitor[u];
    }

    
    return scorePlus(ScoreObj,knowFriends,visitor);
    
  };
  function withoutObjfx(withoutObj,allFrinds){
    let thirdResult = [];
    let count = 0;
    let newadult = allFrinds.toString().split(',');
    for(let i = 0; i< allFrinds.length;i++){
      if(withoutObj.includes(newadult[i]) == false ){
        thirdResult[count++] = newadult[i];
      }
    }
    
    return thirdResult;
  }
  function friendsOfFriends(user,friends){
    let arrayResult= [];
    let count = 0;
    for(let j = 0; j<user.length;j++){ //1 2 
      for(let i = 0; i<friends.length;i++){// 8
        if(friends[i].includes(user[j]) == true){//user와 함께한 친구리스트
          arrayResult[count++] = friends[i];
        }
      }
    }
    return arrayResult;
    // return secondResult;
  }
  function findIndex(user,friends) {
    let arrayResult= [];
    let count = 0;
    for(let i = 0; i<friends.length;i++){
      if(friends[i].includes(user) == true){//user와 함께한 친구리스트
        arrayResult[count++] = friends[i];
        // user를 제외하고 리스트 담아반환하기 
        let userWithFrinds = arrayResult.toString().split(",");
        secondResult = [];
        secondCount = 0;
        for(let j = 0; j < userWithFrinds.length;j++){
          if(userWithFrinds[j].includes(user)== false){
            secondResult[secondCount++] = userWithFrinds[j];
          }
        }
      }
    }
    return secondResult;
  }
  input = [
    {
    user :  "mrko",
    friends : [ 
      ["donut", "andole"], 
      ["donut", "jun"], 
      ["donut", "mrko"], 
      ["shakevan", "andole"], 
      ["shakevan", "jun"], 
      ["shakevan", "mrko"] 
    ],
    visitors : ["bedi", "bedi", "donut", "bedi", "shakevan"]
    // result 기대값 = ["andole", "jun", "bedi"]
    }
  ]
  for(let i = 0; i< input.length;i++){
    console.log( `# ${problem7(input[i].user,input[i].friends,input[i].visitors)}`);
  }
  
  module.exports = problem7;
