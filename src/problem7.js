function problem7(user, friends, visitors) {
  const userData = {
    user: user,
    friendList: [],
    friendCandidates: {}
  }
  const relationships = friends
  const userRelationships = getFriendList(userData, relationships);
  
  evaluateMutuals(userData, userRelationships, relationships);
  evaluateVisitors(userData, visitors);

  return getCandidateResult(userData);
}

function getFriendList(userData, relationships) {
  const userRelationships = {};

  relationships.forEach(relationship => {
    user1 = relationship[0];
    user2 = relationship[1];

    if (!(user1 in userRelationships)) {
      userRelationships[user1] = [];
    }
    if (!(user2 in userRelationships)) {
      userRelationships[user2] = [];
    }

    userRelationships[user1].push(user2);
    userRelationships[user2].push(user1);
  });

  userData.friendList = userRelationships[userData.user];

  return userRelationships;
}

function evaluateMutuals(userData, userRelationships) {
  const user = userData.user
  const userFriends = userData.friendList
  
  if (!userFriends) {
    return;
  }

  for(const friend of userFriends) {
    const candidates = userRelationships[friend]
  
    candidates.forEach(candidate => {
      if (candidate != user && !userFriends.includes(candidate)) {
        if (!(candidate in userData.friendCandidates)) {
          userData.friendCandidates[candidate] = 0
        }
        userData.friendCandidates[candidate] += 10        
      }
    })
  }
}

function evaluateVisitors(userData, visitors) {
  const user = userData.user
  const friendList = userData.friendList
  const candidates = userData.friendCandidates

  for(const visitor of visitors) {
    
    if (visitor == user || friendList?.includes(visitor)){
      continue
    }

    if (!(visitor in candidates)) {
      candidates[visitor] = 0
    }

    candidates[visitor] += 1
  }

  userData.friendCandidates = candidates
}

function getCandidateResult(userData) {
  const candidates = userData.friendCandidates;
  var candidatesList = Object.keys(candidates).map((key) => [key, candidates[key]]).sort();
  var result = [];
  
  candidatesList.sort(function(a, b){return b[1] - a[1];});
  candidatesList = candidatesList.slice(0, 5);
  
  for(item of candidatesList) { 
    result.push(item[0]);
  }

  return result;
}

module.exports = problem7;
