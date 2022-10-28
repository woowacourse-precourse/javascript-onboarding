function problem7(user, friends, visitors) {
  var answer;

  const scores = {}

  const userFriends = friends.reduce((acc, friend)=>{
    const [userA, userB] = friend
    if(userA === user) acc.add(userB)
    if(userB === user) acc.add(userA)
    return acc
  },new Set())

  friends.forEach(friend=>{
    const [userA, userB] = friend
    if(userA === user || userB === user)return

    if(userFriends.has(userA) && !userFriends.has(userB)){
      addNumberToObject(10, scores, userB)
    }
    if(userFriends.has(userB) && !userFriends.has(userA)){
      addNumberToObject(10, scores, userA)
    }
  })

  visitors.forEach(visitor => {
    !userFriends.has(visitor) && addNumberToObject(1, scores, visitor)
  })

  const scoreArray = []
  for (const key in scores) {
    scoreArray.push([key, scores[key]])
  }
  scoreArray.sort((a, b) =>{
    if(a[1] === b[1]){
      return [b[0], a[0]][0] === [b[0], a[0]].sort()[0] ? 0 : -1
    }else return b[1] - a[1]
  })

  answer = scoreArray.map(s => s[0])

  return answer;
}

const addNumberToObject = (number, object, key) => {
  if(!object[key]){
    object[key] = number
  }else{
    object[key] += number
  }
}

module.exports = problem7;
