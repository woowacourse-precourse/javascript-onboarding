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
      if(ScreenOrientation.has(friendsFri[j])) {
        let value1 = value.get(friendsFri[j])+10
        value.delete(friendsFri[j])
        value.set(friendsFri[j], value1)
      } else {
        value.set(friendsFri[j], 10)
      }
    }
  }
  



 



  return answer;
}

module.exports = problem7;
