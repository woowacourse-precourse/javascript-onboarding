function problem6(forms) {
  let answer = "";
  let nickName = [];
  let SlicedTwoWords = "";
  let RepetitionCount = {};
  let result = new Set();

  for (let i = 0; i < forms.length; i++) {
    nickName.push(forms[i][1]);
    console.log(nickName);

    for (let j = 0; j < nickName[i].length - 1; j++) {
      SlicedTwoWords = nickName[i].substring(j, j + 2);
      console.log(SlicedTwoWords);

      if (RepetitionCount[SlicedTwoWords]) {
        RepetitionCount[SlicedTwoWords] += 1;
      } else RepetitionCount[SlicedTwoWords] = 1;
    }
  }
  console.log(RepetitionCount);

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < nickName[i].length - 1; j++) {
      SlicedTwoWords = nickName[i].substring(j, j + 2);
      if (RepetitionCount[SlicedTwoWords] > 1) result.add(forms[i][0]);
    }
  }
  answer = [...result].sort();
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

// [x] new Set를 통한 집합 생성
// [x] 닉네임에서 2글자씩 추출
// [x] 중복시 count +1
// [x] 2개 이상 사용 됐을 경우 result에 이메일 추가
// [x] 결과값 오름차순 정렬
