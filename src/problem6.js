/**
 * 우테코 교육생 중복 닉네임 확인
 * - 같은 글자가 연속적으로 포함되는 닉네임 사용제한
 * @function problem6
 * @param {string[][]} forms [교육생 이메일, 닉네임] 리스트가 저장된 이차원 배열
 * @returns {string[]} result 같은글자가 연속적으로 포함되는 닉네임을 작성한 지원자의 이메일 목록
 *  */

function problem6(forms) {
  const duplicated = [];
  forms.forEach((target, targetIndex) => {
    const [targetEmail, targetNickName] = target;
    for (let i = targetIndex + 1; i < forms.length; i++) {
      for (let j = 0; j < targetNickName.length - 1; j++) {
        if (forms[i][1].includes(targetNickName.slice(j, j + 2))) {
          duplicated.push(targetEmail, forms[i][0]);
          break;
        }
      }
    }
  });
  const result = [...new Set(duplicated)].sort();
  return result;
}

module.exports = problem6;
