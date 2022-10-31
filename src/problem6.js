function problem6(forms) {
  const answer = [];
  const dict = [];
  const duplicateDict = [];
  const remainMembers = [];

  forms.map((crewInfo) => {
    const [email, name] = crewInfo;

    for (let i = 0; i < name.length - 1; i++) {
      const slice = name[i] + name[i + 1];
      if (dict.includes(slice)) {
        answer.push(email);
        duplicateDict.push(slice);
        return;
      } else {
        dict.push(slice);
      }
    }
    remainMembers.push(crewInfo);
  });

  remainMembers.map((crewInfo) => {
    const [email, name] = crewInfo;

    for (let i = 0; i < name.length - 1; i++) {
      const slice = name[i] + name[i + 1];
      if (duplicateDict.includes(slice)) {
        answer.push(email);
        break;
      } else {
        continue;
      }
    }
  });

  return answer.sort();
}

module.exports = problem6;
