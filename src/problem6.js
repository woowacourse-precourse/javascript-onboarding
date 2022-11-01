function problem6(forms) {
  // 매개변수로 주어진 forms를 이메일, 닉네임끼리 모아 새로운 배열로 선언
  const emailArr = forms.map((el) => el[0]);
  const nameArr = forms.map((el) => el[1]);
  // 닉네임 배열의 각 요소를 연속된 두 글자로 만들어질 수 있는 순열 배열로 매핑
  const permutationArr = nameArr.map((el) => {
    // 빈 배열 arr에 각 순열을 추가하여 리턴(매핑)
    let arr = [];
    for (let i = 0; i < el.length - 1; i++) {
      arr.push(el[i] + el[i + 1]);
    }
    return arr;
  });

  // 중복된 값을 요소로 가진 2차원 배열 요소의 인덱스를 배열로 리턴해주는 함수
  const findOverlap = (arr) => {
    // 배열 요소의 인덱스를 저장할 idxArr 선언
    let idxArr = [];
    // 각 배열 요소를 반복적으로 확인
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        // 중복된 값을 요소로 가지는 두 배열의 인덱스를 idxArr에 추가
        const overlapArr = arr[i].filter((el) => arr[j].includes(el));
        if (overlapArr.length > 0) {
          idxArr = idxArr.concat([i, j]);
        }
      }
    }
    // idxArr의 중복 값을 제거하여 배열로 반환
    return [...new Set(idxArr)];
  };

  // 변수 idxArr는 순열 배열 permutationArr에서 중복된 요소를 가진 인덱스를 가진다.
  const idxArr = findOverlap(permutationArr);

  // 같은 글자가 연속적으로 포함된 닉네임을 작성한 이메일이 담길 배열 result 선언
  let result = [];
  //idxArr의 길이 만큼 반복하여
  for (let i = 0; i < idxArr.length; i++) {
    // result 배열에 idxArr에 포함된 인덱스에 해당하는 이메일을 추가
    result.push(emailArr[idxArr[i]]);
  }
  // result 배열을 오름차순으로 정렬하여 리턴
  return result.sort();
}

module.exports = problem6;

// 이메일끼리 모으고 닉네임끼리 모으기
// 닉네임 배열의 각각 요소마다 연속된 두 글자로 만들어질 수 있는 순열 배열 만들기
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
