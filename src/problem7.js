function problem7(user, friends, visitors) {
  let result = new Array();
  let friendObject = new Object();

  friends.map(friend => {
    
    for (let i = 0; i < 2; i++) {
      let standard = friend[i];
      let other = friend[(i + 1) % 2];

      if (standard in friendObject) {
        friendObject[`${standard}`].add(other);
      } else {
        friendObject[`${standard}`] = new Set([other])
      }
    }
  })

  let userFriends = new Set(friendObject[user])
  let scores = new Object();

  for (let person in friendObject) {
    let friendsOfPerson = friendObject[person];

    if (friendsOfPerson.has(user)) {
      continue
    }

    if (person === user) {
      continue
    }

    let count = 0;
    for (let friend of friendsOfPerson) {
      if (userFriends.has(friend)) {
        count += 1
      }
    }
    scores[person] = count * 10
  }

  for (let visitor of visitors) {
    if (userFriends.has(visitor)) {
      continue
    }

    if (visitor in scores) {
      scores[visitor] += 1
    } else {
      scores[visitor] = 1
    }
  }

  let scoresKey = Object.keys(scores)
  scoresKey.sort((name1, name2) => {
    let score1 = scores[name1]
    let score2 = scores[name2]

    if (score1 < score2) {
      return 1
    } else if (score1 > score2) { 
      return -1
    } else {
      if (name1 < name2) {
        return -1
      } else {
        return 1
      }
    }
  })

  result = scoresKey.slice(0, 5)
  return result;
}

module.exports = problem7;
