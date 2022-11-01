function problem7(user, friends, visitors) {
  var answer;
  let userFriends = [];
  let newUserFriends = [];
  let userFriendMap = new Map()

  for (let friend of friends) {
    if (friend.includes(user)) {
      if (friend[0] === user) {
        userFriends.push(friend[1])
      } else {
        userFriends.push(friend[0])
      }
    } else {
      userFriendMap.set(friend[0], 0);
      userFriendMap.set(friend[1], 0);
    }
  }

  for (let friend of friends) {
    userFriends.forEach((userFriend) => {
      if (friend.includes(userFriend)) {
        const FOfF = friend.find((name) => name != user && name != userFriend)
        if (FOfF) {
          newUserFriends.push(FOfF)
        }
      }
    })
  }

  for (let friend of userFriends) {
    userFriendMap.delete(friend)
  }

  for (let friend of newUserFriends) {
    if (userFriendMap.has(friend)) {
      userFriendMap.set(friend, userFriendMap.get(friend) + 10)
    }
  }

  for (let visitor of visitors) {
    if (!userFriends.includes(visitor)) {
      if (userFriendMap.has(visitor)) {
        userFriendMap.set(visitor, userFriendMap.get(visitor) + 1)
      } else {
        userFriendMap.set(visitor, 0)
      }
    }
  }
  
    const RecommandationRanking = [...userFriendMap.entries()].sort(([friend1, score1], [friend2, score2]) => {
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