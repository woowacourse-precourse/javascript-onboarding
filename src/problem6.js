function problem6(forms) {
  let answer = new Set(); //중복없는 set로 결과집합 선언
  let nameObject = new Object(); //닉네임 2글자를 키로 사용하는 객체선언
  let nickName = [];
  let nameKey = '';
  let result = ''; //중간 결과

  for (let i = 0; i < forms.length; i++) {
    //입력받은 폼의 데이터 길이만큼 실행
    nickName.push(forms[i][1]); //각 닉네임에 대한 배열 만들기
    for (let j = 0; j < nickName[i].length - 1; j++) {
      nameKey = nickName[i].substring(j, j + 2); //각 닉네임에 2글자씩 잘라서 키로 만들어주기
      if (nameObject[nameKey]) {
        //해당 키가 있을 때
        result = nameObject[nameKey];
        if (result !== forms[i][0]) {
          answer.add(result);
          answer.add(forms[i][0]);
        }
      }
      nameObject[nameKey] = forms[i][0];
    }
  }

  answer = [...answer].sort(); //결과값 오름차순 정렬
  return answer; //결과 반환
}

module.exports = problem6;
