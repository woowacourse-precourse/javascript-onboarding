function problem6(forms) {

  //혹시나 모를 이메일 중복을 위해 set활용
  var answer = new Set();
  let limitTextObj = {};

  //닉네임을 2글자씩 잘라 넣어주고 기존에 있다면 숫자를 증가시켜 주기 
  forms.map((form) => {
    const [_, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      const testText = nickname.substring(i, i + 2);
      if (testText in limitTextObj) limitTextObj[testText]++;
      else limitTextObj[testText] = 1;
    }
  });

  //기존에 넣어준 데이터를 바탕으로 닉네임을 판별하여 answer에 이메일을 넣어주기
  forms.map((form) => {
    const [email, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      const testText = nickname.substring(i, i + 2);
      if (limitTextObj[testText] > 1) answer.add(email);
    }
  });

  //set을 array로 변환
  answer = Array.from(answer);

  //사전순으로 정렬
  answer.sort();
  return answer;
}

module.exports = problem6;
