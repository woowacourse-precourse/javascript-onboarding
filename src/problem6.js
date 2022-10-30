function problem6(forms) {
  const emailArr = forms.map((el) => el[0]);
  const nameArr = forms.map((el) => el[1]);
  const permutationArr = nameArr.map((el) => {
    let arr = [];
    for (let i = 0; i < el.length - 1; i++) {
      arr.push(el[i] + el[i + 1]);
    }
    return arr;
  });

  const findOverlap = (arr) => {
    let idxArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const overlapArr = arr[i].filter((el) => arr[j].includes(el));
        if (overlapArr.length > 0) {
          idxArr = idxArr.concat([i, j]);
        }
      }
    }
    return [...new Set(idxArr)];
  };

  const idxArr = findOverlap(permutationArr);

  let result = [];
  for (let i = 0; i < idxArr.length; i++) {
    result.push(emailArr[idxArr[i]]);
  }
  return result.sort();
}

module.exports = problem6;

// 이메일끼리 모으고 닉네임끼리 모으기
// 닉네임 배열의 각각 값마다 연속된 두 글자로 만들어질 수 있는 순열 배열 만들기
// 각 배열의 모든 조합끼리 비교하여 중복 값 찾기
// ----> arrA.filter(el => arrB.includes(el));
// 중복 값이 있으면 이메일 배열에서 해당 값의 인덱스의 값을 중복 배열에 넣기

// const emailArr = ['jm@email.com', 'jason@email.com', 'woniee@email.com', 'mj@email.com', 'nowm@email.com']
// const nameArr = ['제이엠','제이슨','워니','엠제이','이제엠']
// const permutationArr = [['제이', '이엠'],['제이', '이슨'],['워니'],['엠제', '제이'], ['이제', '제엠']]

// const forms = [
//   ["jm@email.com", "제이엠"],
//   ["jason@email.com", "제이슨"],
//   ["woniee@email.com", "워니"],
//   ["mj@email.com", "엠제이"],
//   ["nowm@email.com", "이제엠"],
// ];
