const is_similar = (left, right) => {
  for (let i = 0; i < left.length-1; i++){
    if (right.includes(left.slice(i, i+2))){
      return true
    }
  }
  for (let i = 0; i < right.length-1; i++){
    if (left.includes(right.slice(i, i+2))){
      return true
    }
  }
  return false
}

function problem6(forms) {
  var answer;
  var pk_list = forms.map((e)=> false)
  for (let i = 0; i < forms.length; i++){
    for (let j = i; j < forms.length; j++){
      if (i === j){
        continue
      }
      if (is_similar(forms[i][1], forms[j][1])){
        pk_list[i] = true
        pk_list[j] = true
      }
    }
  }
  answer = forms.map((e, idx) => {
    if (pk_list[idx]){
      return e[0]
    }
  })
  answer = answer.filter((e) => e !== undefined)
  answer = answer.sort()

  return answer;
}

module.exports = problem6;
