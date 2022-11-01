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

function getScoreByFriends(friend, userFriends, score) {
  let i;
  if (userFriends.includes(friend[0]) || userFriends.includes(friend[1]))
    i = userFriends.includes(friend[0]) ? 1 : 0;
  else 
    return score;

  if (friend[i] in score == false)
    score[friend[i]] = 10;
  else if (friend[i] in score)
    score[friend[i]] += 10;
  
  return score;
}

function sortFriendByName(friends) {
  let sortedFriend = [];
  for (let name in friends) {
    sortedFriend.push([name,friends[name]]);
  }
  return sortedFriend.sort();
}

function sortFriendByScore(friends) {
  friends.sort(function(a,b){
    return b[1]-a[1]
  });
  return friends;
}

function makeRecommendList(sortedFriend, userFriends, user) {
  let recommend = [];
  sortedFriend.forEach( (friend) => {
    if (friend[0] != user && !userFriends.includes(friend[0]))
      recommend.push(friend[0]);
      
    if (recommend.length == 5)
      return recommend;
  });
  return recommend;
}

function problem7(user, friends, visitors) {
  var answer;
  let friendScore = {};
  let userFriends = []
  let sortedFriend;

  friendScore = getScoreByVisitor(visitors);
  userFriends = getUserFriendList(user, friends);
  for (let i = 0; i < friends.length; i++){
    friendScore = getScoreByFriends(friends[i], userFriends, friendScore)
  }

  sortedFriend = sortFriendByName(friendScore);
  sortedFriend = sortFriendByScore(sortedFriend);
  answer = makeRecommendList(sortedFriend, userFriends, user);

  return answer;
}

module.exports = problem7;
