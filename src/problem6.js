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
}

module.exports = problem6;
