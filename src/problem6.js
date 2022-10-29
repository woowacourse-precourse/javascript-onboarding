function problem6(forms) {
  var answer;
  let userEmail = [];
  let userName = [];
  let idx = new Set()

  const seperate = (array) => {
    userEmail.push(array[0])
    userName.push(array[1])
  }

  forms.forEach(element => {
    seperate(element)
  });

  for (let i = 0; i < userName.length; i++) {
    let ref1 = userName[i].slice(0, 2)
    let ref2 = userName[i].slice(1)
    for (let j = i + 1; j < userName.length; j++) {
      let comp1 = userName[j].slice(0, 2)
      let comp2 = userName[j].slice(1)
      if (ref1 === comp1 || ref1 === comp2 || ref2 === comp1 || ref2 === comp2) {
        idx.add(i)
        idx.add(j)
      }
    }
  }
  
  let ArrIdx = [...idx]
  let duplication = [];
  for(let i = 0; i < ArrIdx.length; i++) {
    duplication.push(userEmail[ArrIdx[i]])
  }
  duplication.sort((a, b) => a.localeCompare(b))
  answer = duplication;
  console.log(answer)
  return answer;
}

module.exports = problem6;
