// 의사 코드 작성
// 1. 2차원 배열인 forms 인자의 원소들을 순회
// 1-1. 구조 분해 할당 사용
// 2. 이름 한 개를 기준으로 나머지 이름을 전부 탐색
// 2-1. 이 때 2글자씩 뽑아내서 기준으로 삼음
// 3. 같은 글자가 연속적으로 포함되면 결과 배열에 이메일 push
// 4. Set 객체를 사용해서 중복 제거 (필요없는 과정이므로 건너뛰기)
// 5. 결과 배열의 이메일들을 오름차순으로 정렬

function problem6(forms) {
  let answer = [];
  let wordGroup = {};

  forms.map(form => {
    let [email, nickname] = form;
    for (let i=0;i<nickname.length-1;i++) {
      let compareStr = nickname.substring(i, i+2);
      if (compareStr in wordGroup) {
        wordGroup[compareStr] += 1;
      } else {
        wordGroup[compareStr] = 1;
      }
    }
  });

  forms.map(form => {
    let [email, nickname] = form;
    for (let i in wordGroup) {
      if(nickname.includes(i) && wordGroup[i] >= 2) {
        answer.push(email);
      }
    }
  });

  answer.sort();

  return answer;
}

module.exports = problem6;
