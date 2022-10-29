function problem7(user, friends, visitors) {
  const peoples = allUserNames(friends, visitors);

}

module.exports = problem7;

const allUserNames = (friends, visitors) => {
  const peoples = {}; 

  friends.forEach(friend => {
    if (!peoples[friend[0]]) peoples[friend[0]] = 0;
    if (!peoples[friend[1]]) peoples[friend[1]] = 0;
  });

  visitors.forEach(visitor => {
    if (!peoples[visitor]) peoples[visitor] = 0;
  })
  return peoples;
}
