function problem6(forms) {
  var answer;
  let includenickname = []
  let duplicatenickname = []
  for (let i = 0; i<forms[0][1].length; i++){
    for (let j = 2; j<=forms[0][1].length; j++){
      if (j+i <= forms[0][1].length){
        includenickname.push(forms[0][1].substr(i,j))
      }
    }
  }
  console.log(includenickname)
  for (let k = 1; k<forms.length; k++){
    for (let p = 0; p<includenickname.length; p++){
      if (forms[k][1].includes(includenickname[p])){
        duplicatenickname.push(includenickname[p]);
      }
    }

  }
  return answer;
}
console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]))
module.exports = problem6;
