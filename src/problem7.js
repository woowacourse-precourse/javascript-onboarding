function problem7(user, friends, visitors) {
  var answer=[];
  let currentFriend = []
  let friendsArr = []
  let obj = {}

  for (let x of friends) {
    obj[x[0]] = 0
    obj[x[1]] = 0
  }

  for (let x of visitors) {
    obj[x] = 0
  }

  for (let x of friends) {
    if (x[0] === user) {
      currentFriend.push(x[1])
    } else if (x[1] === user) {
      currentFriend.push(x[0])
    } else {
      friendsArr.push(x)
    }
  }

  for (let x of friendsArr) {
    for (let y of currentFriend) {
      if (x[0] === y) {
        obj[x[1]] += 10
      } else if (x[1] === y) {
        obj[x[0]] += 10
      }
    }
  }

  for (let x of visitors) {
    obj[x] += 1
  }

  for (let x of currentFriend) {
    delete (obj[x])
  }

  for (let x in obj){
    if (obj[x]===0){
      delete obj[x]
    }
  }

  delete (obj[user])

  let sorted = Object.entries(obj).sort()
  let newSorted = sorted.sort((a, b) => b[1] - a[1])
  for (let i=0;i<newSorted.length;i++){
    answer.push(newSorted[i][0])
  }

  return answer;
}

module.exports = problem7;
