
function problem6(forms) {
  var answer;
  const results = new Set()
  
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

  return answer;
}

module.exports = problem6;
