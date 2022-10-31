function problem6(forms) {
  const MIN_WORD_LENGTH = 2;

  function createSegmentsTable(forms) {
    const table = {};

    for (let form of forms) {
      const [email, name] = form;
      const segments = getSegments(name);

      for (let segment of segments) {
        if (table[segment]) {
          table[segment].push(email);
        }
        else {
          table[segment] = [email];
        }
      }
    }

    return table;
  }

  function getSegments(name) {
    const result = [];

    for (let i = MIN_WORD_LENGTH; i <= name.length; i++) {
      for (let j = 0; j <= name.length - i; j++) {
        result.push(name.substring(j, i + j));
      }
    }

    return result;
  }

  function getDuplicateNameList(table) {
    return Object.values(table)
      .filter(value => value.length > 1)
      .reduce((acc, curr) => acc.concat(curr), []);
  }

  const segmentsTable = createSegmentsTable(forms);
  const duplicateList = getDuplicateNameList(segmentsTable);

  return duplicateList.sort();
}

module.exports = problem6;

// 1트 : 한글자씩 보면서 걸리면 추가 ( 안될거같음 )
// 2트 : 해시
  // 2-1 : 2개,3개,4개... 연속 글자 마다 해시맵을 다 만듦.
