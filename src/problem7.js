function problem7(user, friends, visitors) {
  let friendsDictionary = {};
  for (const friend of friends) {
    if (friend[0] in friendsDictionary) {
      friendsDictionary[friend[0]].push(friend[1])
    } else {
      friendsDictionary[friend[0]] = [friend[1]]
    }

    if (friend[1] in friendsDictionary) {
      friendsDictionary[friend[1]].push(friend[0])
    } else {
      friendsDictionary[friend[1]] = [friend[0]]
    }
  }
  
  let scoresDictionary = {};
  for (const otherUser of Object.keys(friendsDictionary)) {
    if (otherUser === user) {
      continue
    }
    if (friendsDictionary[user].includes(otherUser)) {
      continue
    }

    let score = 0;
    for (const otherUserFriend of friendsDictionary[otherUser]) {
      if (friendsDictionary[user].includes(otherUserFriend)) {
        score += 10
      }
    }
    scoresDictionary[otherUser] = score;
  }

  for (const visitor of visitors) {
    if (visitor === user) {
      continue
    }
    if (friendsDictionary[user].includes(visitor)) {
      continue
    }

    if (visitor in scoresDictionary) {
      scoresDictionary[visitor] += 1
    } else {
      scoresDictionary[visitor] = 1
    }
  }

  let scores = []
  for (const user of Object.keys(scoresDictionary)) {
    scores.push([scoresDictionary[user], user])
  }

  scores.sort((a, b) => {
    if (a[0] > b[0]) {
      return -1
    } else if (a[0] < b[0]) {
      return 1
    } else {
      if (a[1] > b[1]) {
        return 1
      } else if (a[1] < b[1]) {
        return -1
      }
    }
  })

  let answer = [];
  for (let i = 0; i < Math.min(scores.length, 5); i++) {
    if (scores[i][0] < 0) {
      break;
    }
    answer.push(scores[i][1])
  }
  return answer;
}

module.exports = problem7;
