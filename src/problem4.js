function problem4(word) {
  let answer;

  const frogConvertor = (str) => {
    if (str === ' ') return str

    if (motherWords.includes(str)) {
      let idx = motherWords.indexOf(str)
      let newWord = frogWords[idx]
      return newWord
    } else if (lowerMotehrWords.includes(str)) {
      let idx = lowerMotehrWords.indexOf(str)
      let newWord = lowerFrogWords[idx]
      return newWord
    }

  }

  let motherWords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let frogWords = [...motherWords].sort((a, b) => b.localeCompare(a))
  let lowerMotehrWords = lowerCase(motherWords)
  let lowerFrogWords = lowerCase(frogWords) 
  let frogSay = '';
  
  
  for (let i = 0; i < word.length; i++) {
    frogSay += frogConvertor(word[i])
  }
  console.log(frogSay)
  return frogSay;
}

problem4("I love you")

module.exports = problem4;