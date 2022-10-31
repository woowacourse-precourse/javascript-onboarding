function problem6(forms) {
  var answer = [];
  const map2 = new Map(forms)

  const map = new Map()

  for (let e of forms) {
    const userNameParts = e[1].split('')

    for (let i = 0; i < userNameParts.length - 1; i++) {
      const twoWordOFName = userNameParts[i] + userNameParts[i + 1]
      if(map.has(twoWordOFName)) {
        map.set(twoWordOFName, map.get(twoWordOFName) + 1)
      } else {
        map.set(twoWordOFName, 1)
      }
    }
  }
  
  let duplicatedWord;
  for (let key of map.keys()) {
    if(map.get(key) > 1) {
      duplicatedWord = key;
    }
  }

  for(let key of map2.keys()) {
    if(map2.get(key).includes(duplicatedWord)) {
      answer.push(key)
    }
  }
  
  answer.sort((a, b) => a.localeCompare(b))
  console.log(answer)
  return answer;
}

problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
])
module.exports = problem6;