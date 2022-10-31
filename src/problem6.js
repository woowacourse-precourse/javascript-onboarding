


function problem6(forms) {
  var answer = [];

  let obj = {};
  //- array 를 닉네임, 이메일이 key, value 인 object로 변경 
  forms.forEach(element => {
    obj[element[1]] = element[0];
  });

  let names = Object.keys(obj);

  //- 닉네임 배열(object.keys())에서 하나 아이템씩 선정
  for(let i = 0; i < names.length; i++){
    let searchName = names[i]; //searching name
    
    //닉네임 두글자 잘라서 공통된 부분 찾기
    for (let k = 0; k < searchName.length - 1; k++){
      let sliceItem = searchName.slice(k, k+2);
      names.map(function(name){
        if (name != searchName && name.includes(sliceItem)){
          answer.push(name);
        }
      })
    }
    
  }

  // const set = new Set(answer)
  // console.log(set);

  // set.forEach(function(item){
  //   let result = forms.filter(element => element[1] === item);
  // });
  return answer;
}

problem6([
        ["jm@email.com", "제이엠"],
        ["jason@email.com", "제이슨"],
        ["woniee@email.com", "워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이제엠"],
      ]);

module.exports = problem6;
