function problem6(forms) {
  var answer = getDuplicateUser(forms);
  return answer;
}

module.exports = problem6;

function getDuplicateMap(form, tokenMap) {
  let email = form[0];
  for (let x = 0; x < form[1].length - 1; x++) {
    let nameToken = form[1].slice(x, x + 2);
    if (tokenMap.has(nameToken) && tokenMap.get(nameToken).indexOf(email) < 0) {
      tokenMap.set(nameToken, [...tokenMap.get(nameToken), email]);
    } else {
      tokenMap.set(nameToken, [form[0]]);
    }
  }
  return tokenMap;
}

function getDuplicateUser(forms) {
  let tokenMap = new Map();
  let duplicateUserList = new Set();
  let userList = [];
  forms.forEach((form) => {
    if (userList.indexOf(form[0]) === -1) {
      tokenMap = getDuplicateMap(form, tokenMap);
      userList.push(form[0]);
    } else {
      duplicateUserList.add(form[0]);
    }
  });

  tokenMap.forEach((token) => {
    if (token.length > 1) {
      token.forEach((t) => duplicateUserList.add(t));
    }
  });
  if (duplicateUserList.size < 1) {
    return [];
  } else {
    return Array.from(duplicateUserList).sort();
  }
}
