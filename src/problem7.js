function isLowerCaseOnly(word) {
  for (let i = 0; i < word.length; ++i) {
    if (
      word.charCodeAt(i) < 'a'.charCodeAt(0) ||
      word.charCodeAt(i) > 'z'.charCodeAt(0)
    )
      return false;
  }
  return true;
}

function isException(user, friends, visitors) {
  if (
    !(typeof user === 'string') ||
    user.length > 30 ||
    user.length < 1 ||
    !Array.isArray(friends)
  )
    return true;
  for (let i = 0; i < friends.length; ++i) {
    if (
      !Array.isArray(friends[i]) ||
      friends[i].length !== 2 ||
      !(typeof friends[i][0] === 'string') ||
      friends[i][0].length > 30 ||
      friends[i][0].length < 1 ||
      !isLowerCaseOnly(friends[i][0]) ||
      !(typeof friends[i][1] === 'string') ||
      friends[i][1].length > 30 ||
      friends[i][1].length < 1 ||
      !isLowerCaseOnly(friends[i][1])
    )
      return true;
  }
  return false;
}

function problem7(user, friends, visitors) {
  if (isException(user, friends, visitors)) return;
}

module.exports = problem7;
