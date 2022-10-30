// function problem6(forms) {
//   let answer;
//   return setArrToJSON(forms);
// }
// module.exports = problem6;


const setArrToJSON = arr => {
  let result = [];

  arr.map(item => {
    result.push({
      email: item[0], 
      nickname: item[1]
    })
  })

  return result;
}

let forms = [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]

let nform = setArrToJSON(forms)

nform.map((user)=>{
  let charCombination = [];

  let nameParsing = user.nickname.split("");
  // console.log(user.nickname.length)
  for (let i = 0; i < nameParsing.length; i++) {
    for (let j = i+1; j < nameParsing.length; j++){
      charCombination.push(nameParsing[i] + nameParsing[j])
    }
  }

  user.parsingName = charCombination
})

console.log(nform)

