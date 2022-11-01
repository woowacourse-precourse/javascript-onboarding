function problem6(forms) {
  const answer = [];

  const getSubStringList = (name) => {
    const result = [];
    name.split('').map((value, idx) => {
      if (idx < name.length - 1) {
        result.push(name[idx] + name[idx + 1]);
      }
    });
    return result;
  };

  // 배열을 순회하면서 연속된 글자를 포함하는 인원을 찾는다.
  forms.forEach((value, idx) => {
    const [email, name] = value;

    // 현재 기준이 되는 사람의 부분 문자열을 가져온다.
    const subStringList = getSubStringList(name);

    // 반복해서 다른사람들의 이름에 현재 기준이 되는 사람의 이름이 있는지 확인
    for (let i = idx + 1; i < forms.length; i++) {
      const [checkEmail, checkName] = forms[i];

      // 부분 문자열에 있는 것들이 있는지 하나씩 확인한다.
      for (let j = 0; j < subStringList.length; j++) {
        // 있다면 추가하고 break 하도록 한다
        if (checkName.includes(subStringList[j])) {
          if (!answer.includes(checkEmail)) {
            answer.push(checkEmail);
          }
          if (!answer.includes(email)) {
            answer.push(email);
          }
          break;
        }
      }
    }
  });

  answer.sort();
  return answer;
}

module.exports = problem6;
