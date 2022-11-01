// 1. 이메일과 닉네임 짝 지어서 객체 만들기
// 2. 1번에서 만든 객체의 키 개수 만큼 반복문 돌리는데 이때 닉네임을 2글자씩 나눠서 패턴을 만든다.
// 3. 패턴을 만들었으면, 우선 패턴에 해당하는 개수를 저장하기 위한 result 객체를 만든다.
// 4. 1번에서 만든 객체를 반복문 돌려서 각 닉네임이 2번에서 만든 패턴을 갖고 있는지 체크한다.
// 5. 만약 패턴을 갖고 있다면 3번에서 만든 result 객체에 각 키에 해당하는 값을 배열에 추가한다.
// 6. result 객체의 값 중 길이가 2 이상인 것들을 answer 배열에 추가한다.
// 7. 마지막으로 answer 배열을 오름차순으로 정렬한다.

function problem6(forms) {
  const dataObj = {};
  const patterns = new Set();
  const result = {};
  const answer = [];

  for (let i of forms) {
    dataObj[i[1]] = i[0];
  }

  for (let i in dataObj) {
    for (let j = 0; j < i.length - 1; j++) {
      patterns.add([i[j], i[j + 1]].join(''));
    }
  }

  for (let pattern of patterns) {
    result[pattern] = [];
  }

  for (let i in dataObj) {
    for (let pattern of patterns) {
      if (i.includes(pattern)) {
        result[pattern].push(dataObj[i]);
      }
    }
  }

  for (let el in result) {
    if (result[el].length > 2) {
      answer.push(...result[el]);
    }
  }

  return answer.sort();
}

module.exports = problem6;

problem6([
  ['jm@email.com', '제이엠'],
  ['jason@email.com', '제이슨'],
  ['woniee@email.com', '워니'],
  ['mj@email.com', '엠제이'],
  ['nowm@email.com', '이제엠'],
]);
