function problem6(forms) {
  let members = [...forms];
  let membersName = [];

  for (let i = 0; i < members.length; i++) {
    membersName.push(members[i][1]);
  }

  const splitName = name => {
    let nameList = [];
    for (let i = 0; i < name.length - 1; i++) {
      nameList.push(name.substring(i, i + 2));
    }
    return nameList;
  };
}

module.exports = problem6;
