function problem7(user, friends, visitors) {
  const friends_map = new Map()
  const visitors_map = new Map();
  
  
  friends.forEach(value => {
    friends_map.has(value[0])?friends_map.get(value[0]).push(value[1]):friends_map.set(value[0],[value[1]])
    friends_map.has(value[1])?friends_map.get(value[1]).push(value[0]):friends_map.set(value[1],[value[0]])
  });
  
  visitors.forEach(value => {
    visitors_map.has(value)? visitors_map.set(value,visitors_map.get(value)+1):visitors_map.set(value,1)
  })
  
  if(friends_map.has(user)){
  friends_map.get(user).forEach(value => {
    friends_map.delete(value)
    visitors_map.delete(value)
  });
  friends_map.delete(user)
 }
  
  
  friends_map.forEach((value,key) =>{
    visitors_map.has(key)? visitors_map.set(key,visitors_map.get(key)+(value.length*10)):visitors_map.set(key,value.length*10)
  })
  
  let score = [...visitors_map]
  
  score.sort((a,b) =>{
    if(b[1] > a[1]) return 1
    else if(b[1] < a[1]) return -1
    else if(a[0] < b[0]) return -1
    else if(a[0] > b[0]) return 1
  })
  
  let result = new Array()
  
  score.forEach(value => {
    value[1] !== 0 ? result.push(value[0]):false
  });
  

  // console.log([...friends_map.keys()])
  // console.log(visitors_map)
  
  // console.log(score)
  return result
}

module.exports = problem7;


