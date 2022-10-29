const visitorsPoints = (userFriends, visitors, friendsScore) => {
  for(let i=0; i<visitors.length; i++) {
    if(userFriends.includes(visitors[i]))
      continue;
    if(friendsScore[visitors[i]] === undefined) 
      friendsScore[visitors[i]] = 1;
    else
      friendsScore[visitors[i]] += 1;
  }
}

const acquaintancePoints = (user, userFriends, friendsList, friendsScore) => {
  for(let i=0; i<userFriends.length; i++) {
    for(let j=0; j<friendsList[userFriends[i]].length; j++) {
      if(friendsList[userFriends[i]][j] !== user)
        friendsScore[friendsList[userFriends[i]][j]] += 10;
    }
  }
}

const setFriendsList = (friendsList, friends, friendsScore) => {
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
}

function problem7(user, friends, visitors) {
  const friendsList = new Object();
  const friendsScore = new Object();
  setFriendsList(friendsList, friends, friendsScore);
  const userFriends = [];

  for(let i=0; i<friendsList[user].length; i++) {
    userFriends.push(friendsList[user][i]);
  }
  acquaintancePoints(user, userFriends, friendsList, friendsScore);
  visitorsPoints(userFriends, visitors, friendsScore)

  console.log(friendsScore);
}

problem7("mrko", [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ], ["bedi", "bedi", "donut", "bedi", "shakevan"]);

module.exports = problem7;
