const inputFriendsList = (friendsList, friends, friendsScore) => {
  for(let i=0; i<friends.length; i++) {
    for(let j=0; j<2; j++) {
      let k = 0;
      if(j==0) 
        k = 1;
      if(friendsList[friends[i][j]] === undefined){
        friendsList[friends[i][j]] = [friends[i][k]];
        friendsScore[friends[i][j]] = 0;
      }
      else
        friendsList[friends[i][j]].push(friends[i][k]);
    }
  }
  console.log(friendsScore);
}

function problem7(user, friends, visitors) {
  const friendsList = new Object();
  const friendsScore = new Object();
  inputFriendsList(friendsList, friends, friendsScore);
}

problem7("mrko", [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ], ["bedi", "bedi", "donut", "bedi", "shakevan"]);

module.exports = problem7;
