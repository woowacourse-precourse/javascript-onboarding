function problem6(forms) {
  var answer;

  // 리스트에서 닉네임 부분 인덱싱, 닉네임의 길이 파악
  // 1씩 늘려 닉네임 길이까지 2개씩 슬라이싱 해서 리스트a 만듦
  // a리스트[i]로 i값을 올리며 for문으로 a리스트의 요소들과 비교해서 중복 찾음
  // indexOf로 -1이 뜨면 패스, 아니면 삭제

  for (i in forms){
    //이름 인덱싱, 길이 파악
    const nickName = forms[i][1];
    const nickLength = nickName.length;

    for (let e =0 ; e < nickLength-1 ; e++){
      arr = [];
      arr.push(nickName.slice(e,e+2));
    }
  }



  return answer;
}

problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ])

module.exports = problem6;
