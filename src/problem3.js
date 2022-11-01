function problem3(number) {
  let answer =0;

  for(let i=1; i<=number;i++){
    let num = i.toString(); //정규식으로 확인하기 위해 문자화함
    let regExp = /3|6|9/gi; //3,6,9가 포함되었는지 확인하는 정규식
    if(regExp.test(i)){ //만약 포함 되었으면 true 반환
      let numArr = num.match(regExp).filter(item => item !== '');
      //3,6,9 포함된 글자를 하나씩 떼어 배열로 만듦
      answer += numArr.length; //배열 길이를 반복해서 더해줌
    }
 
    }
  return answer;
}

module.exports = problem3;
