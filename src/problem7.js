function problem7(user, friends, visitors) {
  const friendPoint = getFriendPoint(user, friends)
  const visitPoint = getVisitPoint(user, friends, visitors)
  const recommendPoint = friendPoint

  for (let visitor of Object.keys(visitPoint)) {
      if (recommendPoint[visitor]) recommendPoint[visitor] += visitPoint[visitor]
      else recommendPoint[visitor] = visitPoint[visitor]
  }

  const userFriend = checkFriendship(user, friends)
  userFriend.forEach((friend) => {
    if (recommendPoint[friend]) delete recommendPoint[friend]
  })

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
  const visitPoint = {}
  for (let visitor of visitors) {
    visitPoint[visitor] ? visitPoint[visitor] += 1 : visitPoint[visitor] = 1
  }
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
