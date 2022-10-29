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

  // 2글자 키워드가 겹치는 이메일들을 종합
  const assembleDuplications = (duplications) => {
    let allDuplication = new Set();
    Object.values(duplications).forEach((currentWordIncludes) => {
      if (currentWordIncludes.size > 1) {
        allDuplication = new Set([...currentWordIncludes, ...allDuplication]);
      }
    });
    return allDuplication;
  };

  // 함수 사용해서 중복 이메일들을 오름차순으로 정렬해 반환
  const duplications = createDuplicationObject(forms);
  const allDuplication = assembleDuplications(duplications);
  return [...allDuplication].sort();
}

module.exports = problem6;
