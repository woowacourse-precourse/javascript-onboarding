/**
 * @param {string[][]} forms 이메일과 닉네임이 들어있는 배열
 * @returns {string[]} 두 글자 이상 중복된 글자가 들어간 닉네임을 가진 이메일들
 */
function problem6(forms) {
  // 각 이메일의 닉네임을 현재 닉네임을 두 글자씩 자른 배열로 교체한다.
  const crews = forms.map(([email, nickname]) => {
    const twoLetters = sliceTwoLetters(nickname);

    return [email, twoLetters];
  });

  // 중복된 글자를 가진 이메일을 담을 Set을 만든다.
  const emailSet = new Set([]);

  // 닉네임을 하나씩 비교한다.
  for (let i = 0; i < crews.length; i++) {
    for (let j = i + 1; j < crews.length; j++) {
      // 현재 닉네임과 비교대상의 닉네임을 비교해서
      const [email, twoLetters] = crews[i];
      const [comparisonEmail, comparisonTwoLetters] = crews[j];

      // 중복되는 두 글자를 뽑아낸 배열을 만든다.
      const duplicates = twoLetters.filter((nick) =>
        comparisonTwoLetters.includes(nick)
      );

      // 중복 글자 배열에 요소가 있다면 두 이메일을 Set에 넣는다.
      if (duplicates.length > 0) {
        emailSet.add(email);
        emailSet.add(comparisonEmail);
      }
    }
  }

  // 이메일들이 담긴 Set를 배열로 만들고 오름차순 정렬한다.
  const result = Array.from(emailSet).sort();

  return result;
}

/**
 * 닉네임을 두 글자씩 잘라 반환하는 함수
 * @param {string} nickname 닉네임
 * @returns {string[]} 두 글자씩 자른 배열
 */
function sliceTwoLetters(nickname) {
  const twoLetters = [];

  // 닉네임이 한 글자라면 그대로 push
  if (nickname.length === 1) twoLetters.push(nickname);

  // 한 글자가 아니라면 앞에서부터 두 글자씩 잘라서 push
  for (let i = 0; i < nickname.length - 1; i++) {
    const twoLetter = nickname.slice(i, i + 2);
    twoLetters.push(twoLetter);
  }

  return twoLetters;
}

module.exports = problem6;
