const is_similar = (left, right) => {
  temp = [[left,right], [right,left]]
  for (let k=0; k<temp.length;k++ ){
    for (let i = 0; i < temp[k][0].length-1; i++){
      if (temp[k][1].includes(temp[k][0].slice(i, i+2))){
        return true
      }
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
  answer = forms.map((e, idx) => pk_list[idx] ? e[0] : undefined)
  answer = answer.filter((e) => e !== undefined).sort()
  return answer;
}

module.exports = problem6;
