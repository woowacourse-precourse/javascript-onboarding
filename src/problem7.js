function problem7(user, friends, visitors) {
  const friendPoint = getFriendPoint(user, friends)
  const visitPoint = getVisitPoint(user, friends, visitors)
  const recommendPoint = friendPoint

  for (let person of Object.keys(visitPoint)) {
      if (recommendPoint[person]) recommendPoint[person] += visitPoint[person]
      else recommendPoint[person] = visitPoint[person]
  }
  const sorted = Object.keys(recommendPoint).sort((a, b) => {
      if (recommendPoint[a] === recommendPoint[b]) {
          return a < b ? -1 : a > b ? 1 : 0
      } else {
          return recommendPoint[b] - recommendPoint[a]
      }
  })
  return sorted.length > 5 ? sorted.slice(0, 5) : sorted
}

function getVisitPoint(user, friends, visitors) {
  const countVisitPoint = (visitors) => {
    const visitPoint = {}
    for (let visitor of visitors) {
      visitPoint[visitor] ? visitPoint[visitor] += 1 : visitPoint[visitor] = 1
    }
    return visitPoint
  }
  const visitPoint = countVisitPoint(visitors)
  const userFriend = checkFriendship(user, friends)
  userFriend.forEach((person) => {
      if (visitPoint[person]) delete visitPoint[person]
  })
  return visitPoint
}

function getFriendPoint(user, friends) {
  const userFriend = checkFriendship(user, friends)
  const friendsExceptUser = exceptUser(user, friends)
  let friendPoint = {}
  userFriend.forEach((friend) => {
      checkFriendship(friend, friendsExceptUser).forEach((person) => {
          friendPoint[person] ? friendPoint[person] += 10 : friendPoint[person] = 10
      })
  })
  userFriend.forEach((friend) => {
      if (friendPoint[friend]) delete friendPoint[friend]
  })
  return friendPoint
}

function checkFriendship(person, friends) {
  let friendOfPerson = []
  friends.forEach((friendship) => {
    if (friendship[0] === person) friendOfPerson.push(friendship[1])
    if (friendship[1] === person) friendOfPerson.push(friendship[0])
  })
  return friendOfPerson
}

function exceptUser(user, friends) {
  let friendsExceptUser = []
  friends.forEach((friendship) => {
      if (friendship[0] !== user && friendship[1] !== user) friendsExceptUser.push(friendship)
  })
  return friendsExceptUser
}

module.exports = problem7;
