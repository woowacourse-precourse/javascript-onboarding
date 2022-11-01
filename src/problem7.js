function problem7(user, friends, visitors) {
  var answer;

 // user의 이미 친구인 경우
 let alreadyFriends = {};
 for (i = 0; i < friends.length; i++){
   if (friends[i].includes(user)) {
     var friend = friends[i].filter(v => v !== user);
     alreadyFriends[friend] = [];
   }
 }

 // alreadyFriends와 친구인 경우 -> 10점
 var alreadyRecommend = new Object();
 var alreadyFriendsName = Object.keys(alreadyFriends);
 for (i = 0; i < alreadyFriendsName.length; i++) {
   var userFriend = alreadyFriendsName[i]; 
   for (j = 0; j < friends.length; j++){

      if (friends[j].includes(userFriend) && !friends[j].includes(user)) {
        let friend = friends[j].filter((name) => name !== userFriend);
        alreadyFriends[userFriend].push(...friend);
        if (alreadyRecommend[friend] === undefined) {
          alreadyRecommend[friend] = 0;
        }
        if (alreadyRecommend[friend] !== undefined) {
          alreadyRecommend[friend] += 10;
        } else {
          alreadyRecommend[friend] = 0;
        }
      }  
    }
  }

  // 사용자의 타임 라인에 방문 -> 1점
  for (i = 0; i < visitors.length; i++) {
    if(!alreadyFriendsName.includes(visitors[i])) {
      if (alreadyRecommend[visitors[i]] === undefined) {
        alreadyRecommend[visitors[i]] = 0;
      }

      if (alreadyRecommend[visitors[i]] !== undefined) {
        alreadyRecommend[visitors[i]] += 1;
      } else{
        alreadyRecommend[visitors[i]] = 0;
      }
    }
  }
  // 추천 점수가 0점인 경우 추천하지 않음
  // 추천 점수가 같은 경우는 이름 순으로 정렬
  var answer = Object.keys(alreadyRecommend);
  return answer;

}



// module.exports = problem7;
console.log(problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
));