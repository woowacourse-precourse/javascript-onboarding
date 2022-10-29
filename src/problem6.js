// 기능 요구 사항

// -[] 2글자씩 잘라서 중복배열에 저장하기
// -[] 중복배열에 해당하는 이름 검색하기
// - [] 검색된 중복 이름을 저장하기
// - [] 담긴 이름 오릋마순으로 정렬
// - [] 중복 제거

function problem6(forms) {
  let spiceName = [];

  forms.map((data) => {
    console.log(data[1]);
    for (let index = 0; index < data[1].length - 1; index++) {
      spliceName = data[1].slice(index, index + 2);
      console.log(spliceName);
    }
  });

  var answer;
  return answer;
}
const data = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
];
problem6(data);

module.exports = problem6;
