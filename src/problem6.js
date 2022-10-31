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

}

module.exports = problem6;
