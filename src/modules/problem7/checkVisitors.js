function checkVisitors(usersList, visitors) {
  for (const visitor of visitors) {
    usersList.set(visitor, (usersList.get(visitor) ?? 0) + 1);
  }
}

module.exports = checkVisitors;
