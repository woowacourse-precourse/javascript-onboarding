function problem7(user, friends, visitors) {
  let friendObj = {}
  let visitorObj = {}
  let scores = []
  let answer = []
  friends.map((friend) => {
    const [A, B] = friend
    if (!(A in friendObj)) {
      friendObj[A] = {}
      friendObj[A][B] = true
    }
    if (!(B in friendObj)) {
      friendObj[B] = {}
      friendObj[B][A] = true
    }
  })
  visitors.map((visitor) => {
    visitor in visitorObj ? visitorObj[visitor]++ : visitorObj[visitor] = 1;
  })
  for (let id in friendObj) {
    if (user == id) continue;
    let score = 0
    for (let friend in friendObj[user]) {
      if (friend in friendObj[id]) score += 10
    }
    if (id in visitorObj) score += visitorObj[id]
    scores.push({ id, score })
  }
  for(let visitor in visitorObj) {
    if(!(visitorObj[visitor] in friendObj)) {
      scores.push({id: visitor, score: visitorObj[visitor]})
    }
  }
  scores.sort((a, b) => b.score - a.score)
  scores = scores.filter((item) => item.score > 1)

  for(let i=0; i<scores.length; i++) {
    let cnt = 0
    answer.push(scores[i].id)
    cnt++
    if(cnt == 5) break;
  }
  return answer
}

module.exports = problem7;
