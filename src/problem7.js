function problem7(user, friends, visitors) {
  let IDList = [];
  let friendListForEachID = [];

  //CreatFriendList
  for (const friend of friends){
    const IDA = friend[0];
    const IDB = friend[1];

    const indexOfIDA = IDList.indexOf(IDA);
    if(indexOfIDA!=-1){
      friendListForEachID[indexOfIDA].push(IDB);
    }
    else{
      IDList.push(IDA);
      friendListForEachID.push([IDB]);
    }

    const indexOfIDB = IDList.indexOf(IDB);
    if(indexOfIDB!=-1){
      friendListForEachID[indexOfIDB].push(IDA);
    }
    else{
      IDList.push(IDB);
      friendListForEachID.push([IDA]);
    }
  }

  //Friend of a friend +10 score
  let recommendedIDList = [];
  let scoreForEachID = [];
  const indexOfUser = IDList.indexOf(user);
  let userFriendsList = friendListForEachID[indexOfUser];
  
  if(indexOfUser!=-1){
    for (const userFriend of userFriendsList){
      const indexOfUserFriend = IDList.indexOf(userFriend);

      if(indexOfUserFriend!=-1){
        for(const friendOfFriend of friendListForEachID[indexOfUserFriend]){
          if(friendOfFriend == user) continue;
          
          const indexOfFriendOfFriend = recommendedIDList.indexOf(friendOfFriend);

          if(indexOfFriendOfFriend != -1){
            scoreForEachID[indexOfFriendOfFriend] += 10;
          }
          else{ 
            recommendedIDList.push(friendOfFriend);
            scoreForEachID.push(10);
          }
        }
      }   
    }
  }

  //Visitors +1 score
  for (const visitor of visitors){
    if(visitor == user) continue;
    
    const indexOfVisitor = recommendedIDList.indexOf(visitor);

    if(indexOfVisitor!=-1){
      scoreForEachID[indexOfVisitor] += 1;
    }
    else{
      recommendedIDList.push(visitor);
      scoreForEachID.push(1);
    }
  }

  let resultIDAndScore = [];
  for (let i=0; i<recommendedIDList.length; i++){
    const ID = recommendedIDList[i];
    const score = scoreForEachID[i];

    const isAlreadyFriendWithUser = userFriendsList.includes(ID);

    if(isAlreadyFriendWithUser || score==0) continue;
  
    resultIDAndScore.push([ID, score]);
  }

  resultIDAndScore.sort(function(IDAndScore1, IDAndScore2) {
    let ID1 = IDAndScore1[0];
    let score1 = IDAndScore1[1];

    let ID2 = IDAndScore2[0];
    let score2 = IDAndScore2[1];

    if(score1 > score2) return -1;
    if(score1 < score2) return 1;
    if(score1 == score2) return ID1 < ID2 ? -1 : 1;
  })
  
  
  let answer = [];
  for (const IDAndScore of resultIDAndScore){
    const IDOfTopScore = IDAndScore[0];
    answer.push(IDOfTopScore);
    if(answer.length == 5){
      break;
    }
  }
  
  return answer;
}

module.exports = problem7;
