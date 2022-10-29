function problem7(user, friends, visitors) {
  const userFriends = []
  const friendOfFriends = []
  const result = {}
  friends.forEach((element) => element.forEach((person, index, origin) => {
    if(person === user){
      if(index === 0) userFriends.push(origin[1])
      else if(index === 1) userFriends.push(origin[0])
    }
  }))
  friends.forEach((element) => element.forEach((person, index, origin) => {
    if(userFriends.includes(person)){
      if(index === 0 && origin[1] !== user && !friendOfFriends.includes(origin[1])) friendOfFriends.push(origin[1])
      else if(index === 1 && origin[0] !== user && !friendOfFriends.includes(origin[0])) friendOfFriends.push(origin[0])
    }
  }))
  
  for(const i of friendOfFriends){
    result[i] = 10
  }
  visitors.forEach((element) => {
    if(Object.keys(result).includes(element)){
      result[element] = result[element]+1
    } else if(!userFriends.includes(element)){
      result[element] = 1
    }
  })
  const answer = Object.keys(result)
  answer.sort((a,b)=>{
    if(result[a] < result[b]) return 1
    else if(result[a] === result[b]){
      if(a>b) return 1
      else if(a===b) return 0
      else return -1
    } else return -1
  })
  return answer
}
module.exports = problem7;
