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
  

  return answer;
}

module.exports = problem6;
