function problem4(word) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let strArr = String(word).split("")

  let answer = strArr.reduce((acc,cur) => {
    if(cur !== " "){
      if(alpha.includes(cur)){
        let newIdx = 25 - alpha.indexOf(cur)
        acc += alpha[newIdx]
      } else if(alpha.toLowerCase().includes(cur)){
        let newIdx = 25 - alpha.toLowerCase().indexOf(cur)
        acc += alpha[newIdx].toLowerCase()
      } else {
        acc += cur
      }
    } else {
      acc += cur
    }
    return acc
  },"")


  return answer;
}

module.exports = problem4;
