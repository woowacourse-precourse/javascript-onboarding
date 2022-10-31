function problem4(word) {
  let answer;
  let motherWords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let frogWords = [...motherWords].sort((a, b) => b.localeCompare(a))
  let lowerMotehrWords = motherWords.map((e) => e.toLowerCase())
  let lowerFrogWords = frogWords.map((e) => e.toLowerCase())
  let frogSay = '';
  

  const frogConvertor = (str) => {
    if (str === ' ') return str

    if (motherWords.includes(str)) {
      let idx = motherWords.indexOf(str)
      return frogWords[idx]
    } else if (lowerMotehrWords.includes(str)) {
      let idx = lowerMotehrWords.indexOf(str)
      return lowerFrogWords[idx]
    } else if(str === ' ') {
      return str
    }
  }
  
  for (let i = 0; i < word.length; i++) {
    frogSay += frogConvertor(word[i])
  }
  console.log(frogSay)
  return frogSay;
}

problem4("I love you")

module.exports = problem4;