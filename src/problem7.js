function createNewCandidate(hisFriend) {
  return {
    friends: [hisFriend],
    score: 0,
  }
}

function problem7(user, friends, visitors) {
  var answer;
  let userInfo = {
    name: user,
    friends: [],
  };
  let recommendedCandidate = {};

  friends.map((friend) => {
    if (userInfo.name === friend[0]) userInfo.friends.push(friend[1]);
    else if (userInfo.name === friend[1]) userInfo.friends.push(friend[0]);
    else {
      if (!recommendedCandidate[friend[0]]) {
        recommendedCandidate[friend[0]] = createNewCandidate(friend[1]);
      }
      else {
        recommendedCandidate[friend[0]].friends.push(friend[1]);
      }

      if (!recommendedCandidate[friend[1]]) {
        recommendedCandidate[friend[1]] = createNewCandidate(friend[0]);
      }
      else {
        recommendedCandidate[friend[1]].friends.push(friend[0]);
      }
    }
  });

  userInfo.friends.map((userfriend) => {
    let friendsOfFriend = recommendedCandidate[userfriend].friends;
    friendsOfFriend.map((friendOfFriend) => {
      recommendedCandidate[friendOfFriend].score += 10;
    })
  })

  visitors.map((visitor) => {
    if (!recommendedCandidate[visitor]) {
      recommendedCandidate[visitor] = {
        score: 1,
      }
    }
    else recommendedCandidate[visitor].score++;
  })

  let positiveScoreCandidate = [];
  for (const key in recommendedCandidate) {
    if (userInfo.friends.includes(key)) continue;
    if (recommendedCandidate[key].score > 0) positiveScoreCandidate.push(key);
  }

  return answer;
}

module.exports = problem7;
