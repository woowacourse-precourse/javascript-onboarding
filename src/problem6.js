function getSubString(string){
  const result = [];

  // string 매개변수가 들어오면 해당 string의 subString array를 반환
  for(let i = 0 ; i < string.length -1 ; i++){
    for(let j = i+1; j < string.length ; j ++){
      result.push(string.substring(i,j+1));
    }
  }

  return result;
}

function problem6(forms) {
  /**
   * 같은 글자가 연속적으로 포함 될 경우
   *
   * forms length 1 ~ 10000
   * 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복
   * email형식에 부합해야 하며 전체 길이 11 ~ 19
   * 도메인 email.com 제한
   * 닉네임은 한글만 가능, 전체 길이는 1자 이상 20자 미만 ( 1 ~ 19 )
   * result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거
   * */

  const answer = new Set();
  const emailReg = /^[a-zA-Z0-9]+(@email.com)$/;
  const nickNameReg = /[a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+/;
  let len;


  // 제한사항 유효성 체크
  // 1. 이메일 length check && domail check
  // 2. nickname length check
  forms = forms.filter( (user) => {
    if(user[0].length >= 11 && user[0].length < 20 && emailReg.test(user[0]) && !nickNameReg.test(user[1]) && user[1].length >= 1 && user[1].length < 20){
      return user;
    }
  });

  forms.sort(function(a,b){
    return b[1].length - a[1].length;
  });

  len = forms.length;

  const subStringArray = new Set();

  forms.forEach( (f) => {
    subStringArray.add(...getSubString(f[1]));
  });


  console.log(subStringArray);
  console.log(forms);


  subStringArray.forEach( (s) => {
    let cnt = 0;
    const tmpArr = [];
    forms.forEach( (f) => {
        if(f[1].includes(s)){
          tmpArr.push(f[0]);
          cnt++;
        }
    });

    if(cnt >= 2){
      tmpArr.forEach( target => {
        answer.add(target);
      })
    }
  })

  return Array.from(answer.values()).sort();
}

module.exports = problem6;
