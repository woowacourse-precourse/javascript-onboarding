function problem7(user, friends, visitors) {
  const friendValue = {}
  const friendGraph = {}

  friends.forEach((element) => {
    const [username, friendname] = element
    if (!friendGraph[username]) {
      friendGraph[username] = []
    }
    if (!friendGraph[friendname]) {
      friendGraph[friendname] = []
    }
    friendGraph[username].push(friendname)
    friendGraph[friendname].push(username)
  })

  for (const [friendname, connectname] of Object.entries(friendGraph)) {
    friendGraph[user]?.forEach((f) => {
      if (!friendValue[friendname]) friendValue[friendname] = 0
      if (connectname.includes(f)) friendValue[friendname] += 10
    })
  }

  visitors.forEach((f) => {
    if (!friendValue[f]) friendValue[f] = 0
    friendValue[f] += 1
  })

  let result = []
  for (const [friendname, value] of Object.entries(friendValue)) {
    result.push([friendname, value])
  }

  result.sort((a, b) => b[1] - a[1])

  const answer = result
    .filter(
      (i) => i[1] > 0 && i[0] !== user && !friendGraph[user].includes(i[0]),
    )
    .map((i) => i[0])

  return answer
}

module.exports = problem7
