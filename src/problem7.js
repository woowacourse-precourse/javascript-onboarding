function problem7(user, friends, visitors) {
  let friendsScore = {}
  let friendsWithUser = []

  for (let i of friends) {
    let [first, second] = i

    if (first !== user) {
      friendsScore[first] = 0
    } else {
      friendsWithUser.push(second)
    }

    if (second !== user) {
      friendsScore[second] = 0
    } else {
      friendsWithUser.push(first)
    }
  }

  visitors.map((i) => {
    if (i !== user) {
      friendsScore[i] = 0
    }
  })

  //console.log(friendsWithUser)

  friendsWithUser.map((i) => delete friendsScore[i])
  //user 기존 친구들은 점수판에서 제거

  //console.log(friendsScore)

  for (let i = 0; i < friendsWithUser.length; i++) {
    let comapre = friendsWithUser[i] //user친구들 목록을 하나씩 가져와서 비교

    for (let j = 0; j < friends.length; j++) {
      let [first, second] = friends[j]

      if (first === comapre && second !== user) {
        //compare와 친구인데 user와 친구가 아닌 경우
        if (friendsScore[second] !== undefined) {
          //점수판에 없는값은 점수추가 안 함(=user기존 친구들 제외)
          friendsScore[second] = friendsScore[second] + 10
        }
      } else if (second === comapre && first !== user) {
        if (friendsScore[first] !== undefined) {
          friendsScore[first] = friendsScore[first] + 10
        }
      }
    }
  }

  //console.log(friendsScore)

  visitors.map((i) => {
    if (friendsScore[i] !== undefined) {
      friendsScore[i] = friendsScore[i] + 1
    }
  })

  //console.log(friendsScore)

  let result = []

  for (let i in friendsScore) {
    if (friendsScore[i] !== 0) {
      //0점이면 추천하지 않으므로
      result.push([i, friendsScore[i]])
    }
  }

  result = result.sort((a, b) => {
    if (a[1] === b[1]) {
      //점수가 같으면 이름 기준으로 오름차순
      if (a[0] > b[0]) return 1
      if (a[0] < b[0]) return -1
    } else {
      return b[1] - a[1]
    }
  })
  // console.log(result)

  const answer = result.map((i) => i[0])

  //console.log(answer)
  return answer
}

module.exports = problem7
