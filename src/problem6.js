


function problem6(forms) {
  var answer = [];
  let nickAnswer = [];
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
          nickAnswer.push(name);
        }
      })
    }

  }

  //중복된 닉네임을 기준으로 이메일 return 
  const set = new Set(nickAnswer)

  set.forEach(function(key){
    answer.push(obj[key]);
  })

  return answer.sort();
}

module.exports = problem6;
