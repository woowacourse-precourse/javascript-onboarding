// function problem6(forms) {
//   var answer;
//   return setArrToJSON(forms);
// }
// module.exports = problem6;


const setArrToJSON = arr => {
  var result = [];

  arr.map(item => {
    result.push({
      email: item[0], 
      nickname: item[1]
    })
  })

  return result;
}

var forms = [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]

var nform = setArrToJSON(forms)

console.log(nform)

