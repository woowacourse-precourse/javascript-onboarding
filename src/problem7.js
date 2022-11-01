function problem7(user, friends, visitors) {
  var answer;
  
  //findFriends(user, friends);

  return findFriends(user, friends);
}

function findFriends(user, friends) {
  var friendsObj = [];
  var friendOfFriend = [];
  var visitorsObj = [];

  for(var i = 0; i < friends.length; i++) {
    for(var j = 0; j < friends[i].length; j++) {
      if(friends[i][j] === user){
        if(j === 0) friendsObj += friends[i][1] + " ";
        else if(j === 1) friendsObj += friends[i][0] + " ";
      }
    }
  }
  friendsObj = friendsObj.slice(0, -1);
  friendsObj = friendsObj.split(' ');

  for(var i = 0; i < friendsObj.length; i++) {
    for(var j = 0; j < friends.length; j++) {
      for(var k = 0; k < friends[j].length; k++){
        if(friendsObj[i] === friends[j][k]){
          if(k === 0) friendOfFriend += friends[j][1] + " ";
          else if(k === 1) friendOfFriend += friends[j][0] + " ";
        }
      }
    }
  }
  friendOfFriend = friendOfFriend.slice(0, -1);
  friendOfFriend = friendOfFriend.split(' ');
  friendOfFriend = [...new Set(friendOfFriend)];
  for(var m = 0; m < friendOfFriend.length; m++) {
    if(friendOfFriend[m] === user)
      friendOfFriend.splice(m, 1);
  }

  return friendOfFriend;
}

function findVisitors(visitors) {
  var visitArray = "";
  var visitCount = [];

  for(var i = 0; i < visitArray.length; i++) {
    visitArray += visitArray[i];
  }
}


module.exports = problem7;
