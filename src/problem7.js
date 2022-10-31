function problem7(user, friends, visitors) {
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
