function problem7(user, friends, visitors) {
  const friendValue = {}
  const friendGraph = {}

  friends.forEach((element) => {
    const [username, friendname] = element
    if (username === friendname) return
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
    if (
      value > 0 &&
      friendname !== user &&
      !friendGraph[user].includes(friendname)
    )
      result.push([friendname, value])
  }

  // 동일 점수인 경우, 이름순으로 추가
  result.sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1])

  const answer = result.map((i) => i[0])

  return answer.slice(0, 5)
}

module.exports = problem7
