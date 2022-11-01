function problem4(word) {
  
  let mother = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let frog = [...mother].sort((a, b) => b.localeCompare(a))
  let lowerCaseMother = mother.map((e) => e.toLowerCase())
  let lowerCaseFrog = frog.map((e) => e.toLowerCase())
  let frogSay = '';

const frogtranslator = (str) => {
  if (mother.includes(str)) {
    let idx = mother.indexOf(str)
    return frog[idx]
  } else if (lowerCaseMother.includes(str)) {
    let idx = lowerCaseMother.indexOf(str)
    return lowerCaseFrog[idx]
  } else if (str === ' ')
    return str
}

for (let i = 0; i < word.length; i++) {
  frogSay += frogtranslator(word[i])
}

return frogSay;
}

module.exports = problem4;