function problem7(user, friends, visitors) {
  var answer = [];
  var friMap = new Map()
  var value = new Map()

  for(let i = 0; i<friends.length;i++) {
    if(friMap.has(friends[i][0])) {
      friMap.get(friends[i][0]).push(friends[i][1])
    } else {
      friMap.set(friends[i][0], new Array(friends[i][1]))
    }
    if(friMap.has(friends[i][1])) {
      friMap.get(friends[i][1]).push(friends[i][0])
    } else {
      friMap.set(friends[i][1], new Array(friends[i][0]))
    }
  }

  const myFri = friMap.get(user)
  for(let i = 0; i<friMap; i++) {
    let friendsFri = friMap.get(myFri[i]);
    for(let j = 0; j<friendsFri.length; j++){
      if(friendsFri[j] == user) {continue}
      if(value.has(friendsFri[j])) {
        let value1 = value.get(friendsFri[j])+10
        value.delete(friendsFri[j])
        value.set(friendsFri[j], value1)
      } else {
        value.set(friendsFri[j], 10)
      }
    }
  }

  
  for(let i = 0; i<visitors.length; i++) {
    if(myFri.includes(visitors[i])) {continue}
    if(value.has(visitors[i])){
      let value1 = value.get(visitors[i]) + 1
      value.delete(visitors[i])
      value.set(visitors[i], value1)
    } else {
      value.set(visitors[i], 1)
    }
  }
  
  return answer;
}

module.exports = problem7;
