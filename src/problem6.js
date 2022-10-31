function problem6(forms) {
  var answer = [];
  let duplicatenickname = []
  for (let k = 0; k<forms.length; k++){
    substr(forms[k])
  }
  for (let k = 0; k<forms.length; k++){
    for (let p = 0; p<includenickname.length; p++){
      for (let q = 0; q<includenickname[p].length; q++){
        if (p == k){
          continue;
        }
        else if (forms[k][1].includes(includenickname[p][q])){
          duplicatenickname.push(includenickname[p][q]);
        }
      }
    }
  }
  const setduplicatenickname = new Set(duplicatenickname)
  const setnickname = [...setduplicatenickname]
  for (let r = 0; r<forms.length; r++){
    for (let s = 0; s<setnickname.length; s++){
      if(forms[r][1].includes(setnickname[s])){
        if(answer.includes(forms[r][0])==false){
          answer.push(forms[r][0])
        }
      }
    }
  }
  answer = answer.sort()
  return answer;
}
function substr(user){
  let temporarynickname = []
  for (let i = 0; i<user[1].length;i++){
    for (let j = 2; j<=user[1].length; j++){
      if (j+i <= user[1].length){
        temporarynickname.push(user[1].substr(i,j))
      }
    }
  }
  includenickname.push(temporarynickname)
}
var includenickname = []
// console.log(problem6([
//   ["jm@email.com", "제이엠"],
//   ["jason@email.com", "제이슨"],
//   ["woniee@email.com", "워니"],
//   ["mj@email.com", "엠제이"],
//   ["nowm@email.com", "이제엠"],
//   ["jasp@email.com", "박이김"],
//   ["jp@email.com", "김이박"],
//   ["qpw@email.com", "김이순"],
//   ["teemo@email.com", "티모"],
//   ["banana@email.com", "대위티모"],
//   ["secondJm@email.com", "제이엠"],
//   ["apple@email.com", "땷횱봵"],
//   ["stran@email.com", "횱봵으"],
//   ["zebra@email.com", "두글자이상의문자가연속적으로이제맞티모"]
// ]))
module.exports = problem6;
