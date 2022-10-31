function problem3(number) {
  //var answer;
  let check = /[3,6,9]/g; //정규식
  let cnt = 0;
  for(let i=1; i<=number; i++){
    let arr = i.toString();
    //정규식 사용하여 해당 숫자에 3,6,9 들어가는지 체크
    if(arr.match(check) != null){
      cnt += arr.match(check).length; //길이만큼 추가
    }
  }
  return cnt;
  //return answer;
}

module.exports = problem3;
