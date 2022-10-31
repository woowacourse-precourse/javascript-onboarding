function problem6(forms) {
  const crew_name = new Set()
  const result = new Array()
  let start = 0
  let arr_location = 0

  forms.forEach((value,index) => {  
    let email = value[0].split("@")[0] // 이메일 @ 기준으로 나눔 나중에 정렬

    for(let i=0; i<value[1].length-1; i++){
      let str = value[1][i]+value[1][i+1]
      if(crew_name.has(str) === true){ //true 면 중복
        if(arr_location !== index){
          result.push(email)
          arr_location = index
        }
      if(start === 0){
        start = index
      }
      }
      else{
        crew_name.add(str)
      }
    }
  });


  forms.slice(0,start).forEach((value,index) => {      
    let email = value[0].split("@")[0] // 이메일 @ 기준으로 나눔 나중에 정렬
    for(let i=0; i<value[1].length-1; i++){
      let str = value[1][i]+value[1][i+1]
      if(crew_name.has(str) === true){ //true 면 중복
        if(arr_location !== index){
          result.push(email)
          arr_location = index
        }
      }
    }
  });



  result.sort()

  let arr = new Array()
  result.forEach(value => {
    arr.push(value+"@email.com")
  });

  

return arr
}




module.exports = problem6;

// 중복의 조건  두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복
// crew_name에 없는데 검사중인 문자열의 뒷부분이 중복이면 ?.. >> 순서에 맞추어 포함되어 있는 경우  << 이말인가보다



// 입력 forms = [[이메일 , 닉네임]]

// 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.
// 1글자씩 잘라서 set객체 crew_name에 넣어줌 

//crew_name.has(한글자씩 잘라서) has로 검사 false 면 crew_name.add(한글자씩 잘라서)추가
//true면 이메일 배열에 추가하고 countinue

//음 처음 검사한값은 ? 처음 중복 나온 index 기억했다가 한번더 검사 ? 

// 이메일은 배열에 따로 저장 오름차순 할꺼니까 이메일 아이디 부분만 함수 초반부분에 잘라서 판별하자 split("@")
// result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한다.
