function problem6(forms) {

  var answer = []
  let test = {}

  forms.map((item) => {
    const [email, nickname] = item
    for(let i=0; i<nickname.length; i++){
      let key = nickname.substring(i,i+2)
      if(key.length === 2){
        let domain = email.split("@")[0]
        if(test[key]){
          test[key].push(domain)
          test[key].filter((item) => {
            if(answer.includes(item) === false){
              answer.push(item)
            }
          })
        } else {
          test[key] = [domain]
        }
      }
    }
  })

  answer = answer.sort().map((item) => `${item}@email.com`)
  return answer
}



module.exports = problem6;



