function problem6(forms) {
  const duplicatedEmail = [];
  // 오름차순으로 forms 정렬
  forms.sort((a, b) => {
    if (a[0].split('@')[0] > b[0].split('@')[0]) return 1;
    if (a[0].split('@')[0] < b[0].split('@')[0]) return -1;
    if (a[0].split('@')[0] === b[0].split('@')[0]) return 0;
  });

  for (let i = 0; i < forms.length; i++) {
    const compareCrew = forms[i]; // 중복을 비교하기 위한 기준이 되는 크루
    for (let j = i + 1; j < forms.length - 1; j++) {
      const targetCrew = forms[j]; // 기준이 되는 크루와 이름이 중복되는지 비교하는 크루
      for (let k = 0; k < targetCrew[1].length - 1; k++) {
        const duplicatedWord = `${targetCrew[1][k]}${targetCrew[1][k + 1]}`;
        if (compareCrew[1].includes(duplicatedWord)) {
          // 기준이 되는 크루에게서 두글자 이상 포함하고 있다면 중복으로 판단한다.
          duplicatedEmail.push(compareCrew[0], targetCrew[0]);
        }
      }
    }
  }

  const emailSet = new Set(duplicatedEmail); //중복으로 들어간 이메일을 set을 통해 제거
  const answer = [...emailSet];

  return answer;
}

module.exports = problem6;
