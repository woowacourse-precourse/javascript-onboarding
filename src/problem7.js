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
