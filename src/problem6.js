function problem6(forms) {
  let answer = []
  let arr = []
  forms.map((form) => {
      const [id, nickname] = form;
      for(let i=0; i<nickname.length - 1; i++) {
          const tmp = nickname.slice(i, i+2)
          tmp in arr ? arr[tmp]++ : arr[tmp] = 1
      }
  })

  forms.map((form) => {
      const [id, nickname] = form;
      for(let i=0; i<nickname.length - 1; i++) {
          const tmp = nickname.slice(i, i+2)
          if(arr[tmp] > 1) answer.push(id)
      }
  })
  answer.sort()
  return answer;
}

module.exports = problem6;
