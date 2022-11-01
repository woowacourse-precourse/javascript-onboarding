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
 console.log(alreadyFriends);

 // alreadyFriends와 친구인 경우 -> 10점
 var alreadyRecommend = [];
 var usersFriendsName = Object.keys(alreadyFriends);

 for (i = 0; i < usersFriendsName.length; i++) {
   var userFriend = usersFriendsName[i]; //userfriend = donut
   for (j = 0; j < friends.length; j++){
     if (friends[j].includes(userFriend) && !friends[j].includes(user)) {
       var friend = friends[j].filter((name) => name !== userFriend);
       alreadyFriends[userFriend].push(...friend);
       if (alreadyRecommend[friend] !== undefined) {
        alreadyRecommend[friend] += 10;
        } else {
        alreadyRecommend[friend] = 0;
       }
     }
   }
 }

 // 사용자의 타임 라인에 방문한 횟수

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