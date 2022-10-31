function problem4(word) {
  
  let mother = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let frog = [...mother].sort((a, b) => b.localeCompare(a))
  let lowerMother = mother.map((e) => e.toLowerCase())
  let lowerFrog = frog.map((e) => e.toLowerCase())
  let frogSay = '';

const frogConvertor = (str) => {
  if (mother.includes(str)) {
    let idx = mother.indexOf(str)
    return frog[idx]
  } else if (lowerMother.includes(str)) {
    let idx = lowerMother.indexOf(str)
    return lowerFrog[idx]
  } else if (str === ' ')
    return str
}

for (let i = 0; i < word.length; i++) {
  frogSay += frogConvertor(word[i])
}

console.log(frogSay)
return frogSay;
}

problem4('I love you')
module.exports = problem4;