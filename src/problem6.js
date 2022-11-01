// 기능 목록
// 1. 닉네임만 추출하여 배열로 작성
// 2. 닉네임 배열 각원소를 2글자씩 분할 2차원 배열로
// ex) ["제이엠이","제이슨","이제엠"]=> [["제이","이엠","엠이"],["제이","이슨"],["이제","제엠"]]
// 3. 내부 배열을 기준점(std)으로 하여 (["제이","이엠","엠이"])안의 원소와
// 겹치는 다른 내부배열의 원소(["제이","이슨"]) 찾아서 중복키워드들 어레이 반환
// 4. 중복키워드어레이를 기준으로 해당 키워드를 포함하는 원소들 인덱스 반환

// 닉네임으로 부터 2글자 키워드들 반환 함수
function division(nickName) {
  const oneChar = nickName.split("");
  const twoChar = oneChar.map((char, idx, arr) => char + arr[idx + 1]);
  twoChar.pop();

  return twoChar;
}

// 배열 2차원에서 1차워으로 반환 함수
function Arr2Dto1D(arr_2d) {
  let arr_1d = [];
  arr_2d.forEach((ele) => {
    arr_1d = [...arr_1d, ...ele];
  });

  return arr_1d;
}

// 2차원 배열을 받고 배열안의 첫요소배열을 기준으로하여 다른 원소배열의 중복검사
function onComparison(keywordArr2D) {
  const stdKeywordArr = keywordArr2D.shift();

  const keywordArr = Arr2Dto1D(keywordArr2D);

  const duplicateKeyword = stdKeywordArr.filter((std) =>
    keywordArr.includes(std)
  );

  return { duplicateKeyword, keywordArr2D };
}

// 중복 키워드 삭제 함수
function deleteDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function problem6(forms) {
  var answer;
  // 닉네임만 추출
  const nickNameArr = forms.map((user) => user[1]);

  // 키워드들 추출
  const keywordArr2D = nickNameArr.map((nickName) => division(nickName));

  // 중복 키워드 배열 구현
  let input_arr = [...keywordArr2D];
  let duplicatesKeyword = [];
  while (true) {
    const comparisonResult = onComparison(input_arr);

    // 중복키워드들 계속 합치면서 1개의 배열로 만들기
    duplicatesKeyword = [
      ...duplicatesKeyword,
      ...comparisonResult.duplicateKeyword,
    ];

    // 검사한 원소배열을 제외한 배열들을 다음 input으로
    input_arr = comparisonResult.keywordArr2D;

    if (input_arr.length === 1) {
      duplicatesKeyword = deleteDuplicates(duplicatesKeyword);
      break;
    }
  }

  return answer;
}

module.exports = problem6;
