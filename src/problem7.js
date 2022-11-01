function getScoreByVisitor(visitors) {
  let score = {};
  for (let i = 0; i < visitors.length; i++){
    if(visitors[i] in score == false){
      score[visitors[i]] = 1;
    }
    else{
      score[visitors[i]] += 1;
    }
  }
  return score;
}

function getUserFriendList(user, friends) {
  let friendList = [];
  for (let i = 0; i < friends.length; i++){    
    if (friends[i][0] == user || friends[i][1] == user){
      friendList.push(friends[i][0] == user ? friends[i][1] : friends[i][0]);
    }
  }
  return friendList;
}

function problem7(user, friends, visitors) {
  var answer;
  let friendScore = {};
  let userFriends = []

  friendScore = getScoreByVisitor(visitors);
  userFriends = getUserFriendList(user, friends);

  return answer;
}

module.exports = problem7;
