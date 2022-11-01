function problem7(user, friends, visitors) {

  let friendScoreMap = new Map();

  let myFriends = [];

  for (let friend of friends) {
    if (friend.includes(user)) {
      friend.indexOf(user) == 0 ? myFriends.push(friend[1]) : myFriends.push(friend[0]);
    }
  }
  for (let friend of friends) {
    if (friend.includes(user)) { continue; }

    if (myFriends.includes(friend[0])) {
      friendScoreMap = plusPoint(friendScoreMap, friend[1], 10);
    }
    else if (myFriends.includes(friend[1])) {
      friendScoreMap = plusPoint(friendScoreMap, friend[0], 10);
    }
  }
  for (let visitor of visitors) {
    if (myFriends.includes(visitor)) { continue; }
      friendScoreMap = plusPoint(friendScoreMap, visitor, 1);
}


}

function plusPoint(scoreMap, friendName, point) {
  if (scoreMap.has(friendName)) {
      scoreMap.set(friendName, scoreMap.get(friendName) + point);
  }
  else {
      scoreMap.set(friendName, point);
  }
  return scoreMap;
}

module.exports = problem7;
