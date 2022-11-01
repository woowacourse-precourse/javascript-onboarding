function problem6(forms) {
  let name =[];
  let nickname = [];
  let email =[];
  for(let i =0; i<forms.length; i++) //이름 부분만 따로 추출
{
  name.push(forms[i][1])
}

for(let i=0; i<name.length; i++) //이름 부분을 2글자식 순회하면서 추출
{
  for(let j=0; j<name[j].length; j++) 
{
  nickname.push(name[i].substring(j, j+2))
}

}

const duplicate = nickname.filter((element, index) => nickname.indexOf(element) !== index); //필터로 중복된 이름만 따로 저장

for(let j=0; j<forms.length; j++) //forms를 순회하면서 중복된 이름이 있는지 검사후 email 배열에 저장
{
  for(let i =0; i<duplicate.length; i++)
{
 if(forms[j][1].includes(duplicate[i]))
 {
  email.push(forms[j][0])
 } 
}

}

answer = Array.from(new Set(email)).sort(); //마지막으로 이메일 중복제거후 오름차순으로 정렬
  return answer;
}


module.exports = problem6;