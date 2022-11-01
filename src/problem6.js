function problem6(forms) {
  let answer = [];
  const overlap_dict = makeDict(forms);
  answer = findOverlapPeople(forms, overlap_dict);
  return answer;
}
function makeDict(forms) {
  // 이름을 2글자씩 잘라 Dictionary에 저장하는 함수.
  let dict = {};
  forms.map((form) => {
    const [_, name] = form;
    for (let i = 0; i < name.length - 1; i++) {
      const temp_two_words = name[i] + name[i + 1];
      if (!(temp_two_words in dict)) dict[temp_two_words] = 1;
      else dict[temp_two_words] += 1;
    }
  });

  for (const key in dict) if (dict[key] === 1) delete dict[key];

  return dict;
}

module.exports = problem6;
