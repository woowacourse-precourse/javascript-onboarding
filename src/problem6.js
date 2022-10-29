function problem6(forms) {
  for(let i =0;i< forms.length;i++){
    console.log(forms[i]);
    
    for(let j = 0;j< forms[i][1].length;j++){//이름의 갯수만큼 포문
        console.log(forms[i][1][j]);
    }
  }

  // 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함된 단어 찾기
}

input =[
  [ 
    ["jm@email.com", "제이엠"], 
    ["jason@email.com", "제이슨"], 
    ["woniee@email.com", "워니"], 
    ["mj@email.com", "엠제이"], 
    ["nowm@email.com", "이제엠"]  
  ] 
]
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${problem6(input[i])}`);
}

module.exports = problem6;