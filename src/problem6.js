function problem6(forms) {
  // 닉네임의 2글자를 key로 하여 포함하는 모든 유저의 이메일을 set으로 저장
  // 이를 모아 Object로 반환
  const createDuplicationObject = (forms) => {
    const duplications = {};
    forms.forEach(([email, name]) => {
      const nameLength = name.length;
      const nameCharList = name.split("");
      for (let i = 0; i < nameLength - 1; i++) {
        const part = nameCharList.slice(i, i + 2).join("");
        if (!duplications[part]) {
          duplications[part] = new Set([email]);
        } else {
          duplications[part].add(email);
        }
      }
    });
    return duplications;
  };
}

module.exports = problem6;
