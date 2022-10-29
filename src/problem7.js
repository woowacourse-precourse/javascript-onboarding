function problem7(user, friends, visitors) {
  const friendObj = {};
  const scoreMap = new Map();
  initMap(friendObj, friends, scoreMap);

  addFriendScore(friendObj, scoreMap, user, visitors);


}

function initMap(obj, friends, scoreMap) {
  friends.forEach((val) => {
    const [friendA, friendB] = val;
    if (!obj[friendA]) {
      obj[friendA] = [];
    }
    if (!obj[friendB]) {
      obj[friendB] = [];
    }
    scoreMap.set(friendA, 0)
    scoreMap.set(friendB, 0);
    obj[friendA].push(friendB);
    obj[friendB].push(friendA);
  })
}

function addFriendScore(friendObj, scoreMap, user, visitors) {
  const userFriend = friendObj[user];
  const userSet = new Set([...userFriend, user]);
  for (let i = 0; i < userFriend.length; i++) {
    const cur = userFriend[i];
    const curFriends = friendObj[cur];
    curFriends.forEach(friend => {
      if (!userSet.has(friend)) {
        scoreMap.set(friend, scoreMap.get(friend) + 10);
      }
    })
  }

  visitors.forEach(friend => {
    if (!userSet.has(friend)) {
      scoreMap.has(friend) ?
        scoreMap.set(friend, scoreMap.get(friend) + 1) : scoreMap.set(friend, 1);
    }
  })
}




module.exports = problem7;


problem7("mrko", [["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"])