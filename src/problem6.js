const makeOverlapDictionary = (forms) => {
  let overlapDictionary = {};
  for (const [email, name] of forms) {
    if (name.length > 1) {
      for (let i = 0; i < name.length - 1; i++) {
        const slicedName = name[i] + name[i + 1];
        if (overlapDictionary[slicedName] === undefined) {
          overlapDictionary[slicedName] = [email];
        } else {
          overlapDictionary[slicedName].push(email);
        }
      }
    }
  }
  return overlapDictionary;
};

const selectOverlapedUserEmail = (dict) => {
  let emails = [];
  for (const key in dict) {
    if (dict[key].length > 1) {
      emails.push(...dict[key]);
    }
  }

  return [...new Set(emails)];
};

function problem6(forms) {
  const overlapDictionary = makeOverlapDictionary(forms);
  const emails = selectOverlapedUserEmail(overlapDictionary);
  let answer = emails.sort();
  return answer;
}

module.exports = problem6;
