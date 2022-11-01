function problem7(user, friends, visitors) {
  var answer;

  let userName = new Map();
  let set = new Set(visitors)

  for (let visitor of set) {
    userName.set(visitor, userName.get(visitor)||1)
  }

  for (let friend of friends) {
    const idA = friend[0]
    const idB = friend[1]

    if (idA !== user && idB !== user) {
     userName.set(idA, userName.get(idA)+10||0)
     userName.set(idB, userName.get(idB)+10||0)
    } else {
      if (idA === user) {
        userName.delete(idB)
      } else {
        userName.delete(idA)
      }
    }

  }

  result = Array.from(userName.entries())
  result.sort(function (a, b) {
    if (a[1] < b[1]) {
      return 1;
    } 
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    } 
    if (a[0] < b[0]) {
      return -1;
    }
  })
  answer = [];
  for (person of result) {
    answer.push(person[0]);
  }
  answer = answer.slice(0, 6);
  return answer;
}

module.exports = problem7;
