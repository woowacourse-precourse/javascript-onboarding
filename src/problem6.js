
function problem6(forms) {
  var answer;
  const results = new Set()
  const searched = new Set()
  
  const findDuplications = (word) => {
    const matches = forms.filter(form => {
      const [, nickName] = form

      return nickName.match(word)
    })
    if(matches.length === 1)return
    matches.forEach(match => {
      const [email] = match

      results.add(email)
    })
  }

  forms.forEach(form => {
    const [, nickName] = form
    
    for (let i = 0; i < nickName.length-1; i++) {
      const word = nickName[i]+nickName[i+1];
      if(searched.has(word))continue
      
      searched.add(word)
      findDuplications(word)
    }
  })

  answer = [...results].sort()
  return answer;
}

module.exports = problem6;
