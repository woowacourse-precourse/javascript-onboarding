function problem6(forms) {
  const answer = []
  const duplicatedArry = getDuplicatedArray(forms.map((element) => element[1]))

  forms.forEach((element) => {
    if(duplicatedArry.some((duplicated) => element[1].includes(duplicated) )){
      answer.push(element[0])
    }
  })

  answer.sort()

  return answer;
}

function splitWord(word){
  const result = []
  for(let i=0; i<word.length-1; i++){
    result.push(word.substring(i, i+2))
  }
  return result
}

function addWordsToMapObj(words, mapObj){
  for(const word of new Set(words)){
    if(mapObj.has(word)){
      mapObj.set(word, mapObj.get(word) + 1)
    } else {
      mapObj.set(word, 1)
    }
  }
}

function getDuplicatedArray(words){
  const dict = words.reduce((acc, cur) => {
    addWordsToMapObj(splitWord(cur), acc)
    return acc
  }, new Map())

  for(const word of dict.keys()){
    if(dict.get(word) < 2){
      dict.delete(word)
    }
  }

  return Array.from(dict, ([word, _]) => (word))
}

module.exports = problem6;
