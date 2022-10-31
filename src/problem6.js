// 기능 요구 사항

// -[x] 2글자씩 잘라서 중복배열에 저장하기
// -[x] 중복배열에 해당하는 이름 검색하기
// -[x] 중복 제거
// -[x] 검색된 중복 이름을 저장하기
// -[x] 담긴 이름 오름차순으로 정렬

function problem6(forms) {
  let sliceName = [];
  let name = [];

  forms.map((data, key) => {
    for (let index = 0; index < data[1].length - 1; index++) {
      sliceName.push(data[1].slice(index, index + 2));
    }
  });

  const uniqueArr = sliceName.filter((element, index) => {
    return sliceName.indexOf(element) === index;
  });

  var ans2 = [];
  uniqueArr.map((data) => {
    let ans = [];
    let count = 0;
    for (let index = 0; index < forms.length; index++) {
      if (forms[index][1].indexOf(data) > -1) {
        count++;
        ans.push(forms[index]);
      }
    }

    if (count > 1) {
      ans2.push(...ans);
    }
  });

  const uniqueArr2 = ans2.filter((element, index) => {
    return ans2.indexOf(element) === index;
  });

  uniqueArr2.sort();

  let answer = [];

  uniqueArr2.map((data) => {
    answer.push(data[0]);
  });

  return answer;
}

module.exports = problem6;
