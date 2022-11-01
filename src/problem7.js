function problem7(user, friends, visitors) {
  var answer = [];
  var friMap = new Map()

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

  

 



  return answer;
}

module.exports = problem7;
