function problem6(forms) {
  var answer = [];

  forms.forEach((v, i, arr) => {
    const standardEmail = v[0];
    const standardNickname = v[1];

    // 기준이 되는 [email, nickname]에 대해서 뒤에서부터 비교
    for (let j = arr.length - 1; j > i; j--) {
      const compareEmail = arr[j][0];
      const compareNickname = arr[j][1];

      standardNickname.split('').forEach((word, k) => {
        // 비교 닉네임에 기준 닉네임의 글자가 포함되어있지 않는다면 early return
        if (!compareNickname.includes(word)) return;
        // 공통된 word에 대해, 기준 닉네임과 비교 닉네임 각각의 다음 글자가 둘다 존재하지 않는다면 early return
        if (
          !(
            standardNickname[k + 1] &&
            compareNickname[compareNickname.indexOf(word) + 1]
          )
        )
          return;
        // 공통된 word에 대해, 기준 닉네임과 비교 닉네임 각각의 다음 글자가 서로 같다면 해당하는 이메일 2개를 answer에 push
        if (
          standardNickname[k + 1] ===
          compareNickname[compareNickname.indexOf(word) + 1]
        ) {
          answer.push(standardEmail, compareEmail);
        }
      });
    }
  });

  var answer = [...new Set(answer)].sort();

  return answer;
}

module.exports = problem6;
