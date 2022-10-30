function problem6(forms) {
  return solution(forms);
}
module.exports = problem6;

// 같은 글자가 연속적으로 포함?
// 모든 글자에 대해서 조합을 만들어야 하나?
// 문자 트리를 만들어야 하나?
// 1. 닉네임을 순회해서 2글자씩 쪼개어 저장하기

function solution(forms) {
  const records = {};
  forms.forEach((form, idx) => {
    const split = splitIntoTwo(form);
    split.forEach((s) => {
      if (!records[s]) records[s] = [];
      records[s].push(idx);
    });
  });

  const results = [];
  const repeated = findRepeated(records);
  repeated.forEach((r) => {
    results.push(forms[r][0]);
  });
  return results.sort();
}
/**
 *
 * @param {array} form [이메일, 닉네임]으로 구성된 배열
 */
function splitIntoTwo(form) {
  const [_, nickname] = form;
  const results = [];
  for (let i = 0; i < nickname.length - 1; i++) {
    let str = nickname[i] + nickname[i + 1];
    results.push(str);
  }
  return results;
}
/**
 *
 * @param {object} records : 2글자로 쪼갠 닉네임의 정보를 가진 object
 */
function findRepeated(records) {
  const results = new Set();
  const keys = Object.keys(records);
  keys.forEach((key) => {
    const values = records[key];
    if (values.length > 1) {
      for (let i = 0; i < values.length; i++) {
        results.add(values[i]);
      }
    }
  });
  return results;
}
