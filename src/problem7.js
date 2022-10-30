function problem7(user, friends, visitors) {
  var answer;
  const users = new Map();

  visitors.forEach(visitor => {
    if(users.has(visitor)) {
      users.set(visitor, users.get(visitor)+1);
    } else {
      users.set(visitor, 1);
    }
  });
  
  return answer;
}

module.exports = problem7;
