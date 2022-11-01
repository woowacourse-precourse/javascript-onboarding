// 유저의 친구 찾기
function findFriendsOfUser(user, friends){
  let friendsOfUser = [];
  for (let i=0; i<friends.length;i++){
    if(user === friends[i][0]){
      friendsOfUser.push(friends[i][1]);
    }else if (user === friends[i][1]){
      friendsOfUser.push(friends[i][0]);
    }
  }
  return friendsOfUser;
}

// 친구의 친구 찾기
function findFriendsOfFriends(friendsOfUser, friends){
  let friendsOfFriends = [];
  for (let i=0; i<friendsOfUser.length; i++){
    for(let j=0; j<friends.length; j++){
      if(friendsOfUser[i] === friends[j][0]){
        friendsOfFriends.push(friends[j][1]);
      }else if (friendsOfUser[i] === friends[j][1]){
        friendsOfFriends.push(friends[j][0]);
      }
    }
  }
  return friendsOfFriends;
}

// 방문자들 점수 부여
function addVisitorsScore(visitors){
  let score = {};
  for (let i=0; i<visitors.length; i++){
    if (score[visitors[i]]){
      score[visitors[i]] += 1;
    }else{
      score[visitors[i]] = 1;
    }
  }
  return score;
}

// 친구의 친구 점수 부여
function addFriendsScore(friendsOfFriends, score){
  for (let i=0; i<friendsOfFriends.length; i++){
    if (score[friendsOfFriends[i]]){
      score[friendsOfFriends[i]] += 10;
    }else{
      score[friendsOfFriends[i]] = 10;
    }
  }
  return score;
}

// 유저, 이미 유저와 친구인 사람, 점수가 0인 사람 제외
function filtrateScore(user, friendsOfUser, totalScore){
  let filterScore = [];
  for (let i in totalScore){
    if (i === user || friendsOfUser.includes(i) || totalScore[i] === 0){
      continue;
    }
    filterScore.push([i,totalScore[i]]);
  }
  return filterScore;
}

// 점수 내림차순, 이름 오름차순으로 정렬
function sortScore(fillterScore){
  fillterScore.sort(function(a, b){
    if(a[1] === b[1]){
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
    }
    return b[1] - a[1];
  });
  return fillterScore;
}

function problem7(user, friends, visitors) {
  let answer = [];
  const friendsOfUser = findFriendsOfUser(user, friends);
  const friendsOfFriends = findFriendsOfFriends(friendsOfUser, friends);
  const visitorsScore = addVisitorsScore(visitors);
  const totalScore = addFriendsScore(friendsOfFriends, visitorsScore);
  const fillterScore = filtrateScore(user, friendsOfUser, totalScore);
  const sortingScore = sortScore(fillterScore);

  for (let i=0; i<sortingScore.length; i++){
    if (i==5){
      break;
    }
    answer.push(sortingScore[i][0]);
  }
  return answer;
}

module.exports = problem7;
