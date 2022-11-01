function problem6(forms) {
  var answer= []

  forms.forEach((form1)=> {
      for(let i =0 ; i < form1[1].length-1; i++){
      let two_letter = form1[1][i] + form1[1][i+1]
      forms.forEach((form2)=> {
          if(form2[1].includes(two_letter)&& forms.indexOf(form1)!= forms.indexOf(form2)){
              if(!answer.includes(form1[0])) answer.push(form1[0])
          }
      })
  }

  })

  answer.sort((a, b) => a.localeCompare(b));
  return answer;
}

module.exports = problem6;
