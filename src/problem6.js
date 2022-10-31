function findEmail(temp_str,idx,nickname,email,result){
  for(let j=idx+1;j<nickname.length;j++)
  {
    if(nickname[j].match(temp_str)){
      if(!result.includes(email[j])){
          result.push(email[j])
      }
      if(!result.includes(email[idx])){
          result.push(email[idx])
        }
      }
  }
  return result;
}

function problem6(forms) {
  let result=[];
  let nickname =[]
  let email = []
  forms.forEach(function(ele){
    nickname.push(ele[1])
    email.push(ele[0])
  });

  nickname.forEach(function(ele,idx){
    for(let i=0;i<ele.length-1;i++)
      {
        let temp_str = ele[i]+ele[i+1]
        result = findEmail(temp_str,idx,nickname,email,result);
      }
  })
}

module.exports = problem6;
