/* 
1. 배열을 순회(map)하면서 현재 elem 뒤에 있는 요소들과 동일한지 확인
2. 1에서 동일한 요소는 answer 배열에 추가
3. 중복 제거를 위해 set으로 변환 후 다시 배열로 변환
4. 배열 오름차순 정렬
*/
function problem6(forms) {
  let answer = [];
  let flag = false;
  forms.map((elem, idx) => {
    for (let i = idx + 1; i < forms.length; i++) {
      if (
        forms[i][1].includes(elem[1].substring(0, 2)) |
        forms[i][1].includes(elem[1].substring(1, 3))
      ) {
      }
    }
  });

  return answer;
}

module.exports = problem6;
