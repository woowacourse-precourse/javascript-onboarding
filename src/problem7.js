function addVisitorsScore(visitors){
  var score = {};
  for (var i=0; i<visitors.length; i++){
    if (score[visitors[i]]){
      score[visitors[i]] += 1;
    }else{
      score[visitors[i]] = 1;
    }
  }
  return score;
}

function addFriendsScore(friendsOfUser, friends, score){
  var friendsOfFriends = [];
  for (var i=0; i<friendsOfUser.length;i++){
    for(var j=0; j<friends.length; j++){
      if(friendsOfUser[i] === friends[j][0]){
        friendsOfFriends.push(friends[j][1]);
      }else if (friendsOfUser[i] === friends[j][1]){
        friendsOfFriends.push(friends[j][0]);
      }
    }
  }

  for (var i=0; i<friendsOfFriends.length; i++){
    if (score[friendsOfFriends[i]]){
      score[friendsOfFriends[i]] += 10;
    }else{
      score[friendsOfFriends[i]] = 10;
    }
  }
  return score;
}

function problem7(user, friends, visitors) {
  var answer = [];
  var friendsOfUser = [];
  var fillterScore = [];

  for (var i=0; i<friends.length;i++){
    if(user === friends[i][0]){
      friendsOfUser.push(friends[i][1]);
    }else if (user === friends[i][1]){
      friendsOfUser.push(friends[i][0]);
    }
  }

  var visitorsScore = addVisitorsScore(visitors);
  var totalScore = addFriendsScore(friendsOfUser, friends, visitorsScore);
  
  // 이미 친구인 사람, 점수가 0인 사람, User 제외
  for (var i in totalScore){
    if (i === user || friendsOfUser.includes(i) || totalScore[i] === 0){
      continue;
    }
    fillterScore.push([i,totalScore[i]]);
  }

  // 점수 내림차순, 이름 오름차순으로 정렬
  fillterScore.sort(function(a, b){
    if(a[1] === b[1]){
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
    }
    return b[1] - a[1];
  });

  for (var i=0; i<fillterScore.length; i++){
    if (i==5){
      break;
    }
    answer.push(fillterScore[i][0]);
  }
  return answer;
}

module.exports = problem7;
