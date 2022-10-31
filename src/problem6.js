function problem6(forms) {
  var answer;
  let map = new Map()

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

console.log(map)
  return answer;
}

module.exports = problem6;