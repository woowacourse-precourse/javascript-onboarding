function problem6(forms) {
  const answer = []
  const splitNames = forms.map((element) => (
    element[1]
          .split('')
          .map((element, index, origin) => {
                return index !== origin.length-1 ? element + origin[index+1] : null
              })
          .slice(undefined, -1)
  ))

  forms.forEach((element, eIndex) => {
    splitNames.forEach((pieces, pIndex) => {
      if(eIndex !== pIndex && pieces.some((piece)=>element[1].includes(piece)) && answer.at(-1) !== element[0]){
          answer.push(element[0])
      }
    })
  })

  answer.sort()

  return answer;
}

module.exports = problem6;
