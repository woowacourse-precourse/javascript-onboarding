function problem7(user, friends, visitors) {
  const users = Array.from(
    new Set([user, ...friends.flatMap((friend) => friend), ...visitors])
  )
  const point = users.map((user) => [user, 0])
  const relationship = new Map()

  users.forEach((user) => {
    relationship.set(user, [])
  })

  friends.forEach(([friendA, friendB]) => {
    relationship.set(friendA, relationship.get(friendA).concat(friendB))
    relationship.set(friendB, relationship.get(friendB).concat(friendA))
  })

  const relationshipArr = Array.from(relationship.entries())

  const userFriend = relationshipArr.find(([name]) => name === user)[1]

  relationshipArr.forEach(([person, friends]) => {
    if (user !== person) {
      friends.forEach((friend) => {
        if (userFriend.includes(friend))
          point.find(([name]) => name === person)[1] += 10
      })
    }
  })

  visitors.forEach((visitor) => {
    if (!userFriend.includes(visitor)) {
      point.find(([name]) => name === visitor)[1] += 1
    }
  })

  return point
    .filter(([name, score]) => score > 0 && !userFriend.includes(name))
    .sort((pA, pB) => {
      if (pA[1] === pB[1]) return pA[0] > pB[0] ? 1 : -1
      else return pA[1] > pB[1] ? -1 : 1
    })
    .map(([name]) => name)
    .slice(0, 5)
}

module.exports = problem7
