function problem6(forms) {
  let name =[];
  let nickname = [];
  let email =[];
  for(let i =0; i<forms.length; i++)
{
  name.push(forms[i][1])
}

for(let i=0; i<name.length; i++)
{
  for(let j=0; j<name[j].length; j++)
{
  nickname.push(name[i].substring(j, j+2))
}

}

const duplicate = nickname.filter((element, index) => nickname.indexOf(element) !== index);

for(let j=0; j<forms.length; j++)
{
  for(let i =0; i<duplicate.length; i++)
{
 if(forms[j][1].includes(duplicate[i]))
 {
  email.push(forms[j][0])
 } 
}

}

answer = Array.from(new Set(email)).sort();
  return answer;
}


module.exports = problem6;
