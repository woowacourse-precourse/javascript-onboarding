function problem7(user, friends, visitors) {
  var answer;
  let userFriends = [];
  let newUserFriends = [];
  let friendScoreMap = new Map()

  for (let friend of friends) {
    if (friend.includes(user)) {
      if (friend[0] === user) {
        userFriends.push(friend[1])
      } else {
        userFriends.push(friend[0])
      }
    } else {
      friendScoreMap.set(friend[0], 0);
      friendScoreMap.set(friend[1], 0);
    }
  }

  for (let friend of friends) {
    userFriends.forEach((userFriend) => {
      if (friend.includes(userFriend)) {
        const friendOfFriend = friend.find((name) => name != user && name != userFriend)
        if (friendOfFriend) {
          newUserFriends.push(friendOfFriend)
        }
      }
    })
  }

  for (let friend of userFriends) {
    friendScoreMap.delete(friend)
  }

  for (let friend of newUserFriends) {
    if (friendScoreMap.has(friend)) {
      friendScoreMap.set(friend, friendScoreMap.get(friend) + 10)
    }
  }

  for (let visitor of visitors) {
    if (!userFriends.includes(visitor)) {
      if (friendScoreMap.has(visitor)) {
        friendScoreMap.set(visitor, friendScoreMap.get(visitor) + 1)
      } else {
        friendScoreMap.set(visitor, 0)
      }
    }
  }
  
    const RecommandationRanking = [...friendScoreMap.entries()].sort(([friend1, score1], [friend2, score2]) => {
      if (score1 === score2) {
       return friend1.localeCompare(friend2)
      } else {
       return score2 - score1
      }
    })

  answer = RecommandationRanking.map(([name]) => name).slice(0, 5)
  return answer;
}

module.exports = problem7;