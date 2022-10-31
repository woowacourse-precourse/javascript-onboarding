console.log( problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]))
function problem6(forms) {
  var answer;
  let key = new Set();
  console.log(forms.length)
  for(let i =0;i<forms.length;i++){
    for(let j=0;j<forms[i][1].length;j++){
      if((forms[i][1].substr(j,2)).length==2) key.add(forms[i][1].substr(j,2));
    }
  }
  let arr = Array.from(key);
  console.log(arr);
  for(let i =0;i<arr.length;i++){
    let flag = 0 ;
    for(let j=0;j<forms.length;j++){
      if(forms[i][1].includes(arr[j])) flag++;
    }
    
  }
  console.log(key);
  return answer;
}

module.exports = problem6;
