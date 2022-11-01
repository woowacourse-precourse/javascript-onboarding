function problem7(user, friends, visitors) {
  var answer;
 // user의 이미 친구인 사람 찾기
 let alreadyFriends = [];

 for (i = 0; i < friends.length; i++){
   if (friends[i].includes(user)) {
     var friend = friends[i].filter(v => v !== user);
     console.log(friend);

     alreadyFriends[friend] = [];
   }
 }

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