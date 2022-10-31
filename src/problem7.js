function problem7(user, friends, visitors) {
  var answer;

  console.log(" this is problem 7 ")

  const friendsDict = {}
  let userFriends = []
  for ( let i = 0 ; i < friends.length; i ++) {
    if ( friends[i][0] === user) {
      userFriends.push(friends[i][1])
    } else if ( friends[i][1] === user) {
      userFriends.push(friends[i][0])
    }
  }
  friendsDict[user] = userFriends

  const friendsScore = {}
  // friends Case
  for ( let a = 0 ; a < friends.length; a ++) {
    if ( friends[a][0] !== user && friends[a][1] !== user) {
      friendsScore[friends[a][0]] = 0
      friendsScore[friends[a][1]] = 0
    }
  }
  for ( let j = 0 ; j < friends.length; j ++) {
    if ( friends[j][0] !== user && friends[j][1] !== user) {
      if ( friendsDict[user].includes(friends[j][0])) {
        friendsScore[friends[j][1]] += 10
      } else if ( friendsDict[user].includes(friends[j][1])) {
        friendsScore[friends[j][0]] += 10
      }
    }
  }

  // visitors Case
  for ( let b = 0 ; b < visitors.length ; b ++) {
    if ( friendsDict[user].includes(visitors[b]) === false ) {
      friendsScore[visitors[b]] = 0
    }
  }
  for ( let k = 0 ; k < visitors.length ; k ++) {
    if ( friendsDict[user].includes(visitors[k]) === false) {
      friendsScore[visitors[k]] += 1
    }
  }
  // 내림차순 정렬
  let sorted = Object.entries(friendsScore).sort((a, b) => b[1] - a[1]);

  result = []
  for ( let x = 0 ; x < sorted.length ; x ++) {
    if (sorted[x][1] !== 0 && result.length < 6) {
      result.push(sorted[x][0])
    }
  }
  answer = result
  return answer;
}

module.exports = problem7;
