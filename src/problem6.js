function problem6(forms) {
  var answer;
  // 중복 제거 방지를 위한 Set
  let result = new Set([]);
  // 각 닉네임의 두 글자가 key이고 개수가 value인 딕셔너리.
  let dict = {};
  let nickname = [];
  // dict의 Key 역할.
  let word;
  // 두 글자씩 쪼개어 딕셔너리 형태로 만든다.
  for (let i = 0; i < forms.length; i++) {
    nickname.push(forms[i][1]);
    for (let j = 0; j < nickname[i].length - 1; j++) {
      word = nickname[i].substring(j, j + 2);
      if (dict[word]) {
        // 이미 존재한다면 +1.
        dict[word] += 1;
      } else {
        // dict에 존재하지 않을 때, 1로 초기화.
        dict[word] = 1;
      }
    }
  }
  // 2개 이상 중복된 key값인 경우 그리고 해당 유저의 닉네임에 Key값이 포함되었다면
  // 그 유저의 이메일을 result에 add.
  for (let key in dict) {
    for (let i = 0; i < forms.length; i++) {
      if (dict[key] > 1 && forms[i][1].includes(key)) {
        result.add(forms[i][0]);
      }
    }
  }
  // set을 배열로 변환.
  answer = [...result];
  answer.sort();
  return answer;
}

module.exports = problem6;
