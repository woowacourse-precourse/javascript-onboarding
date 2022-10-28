function problem7(user, friends, visitors) {
  let answer = [];
  const currFriends = friends.filter(el => el.includes(user)).flat().filter(name => name !== user);
  answer = Array.from(new Set([...friends, ...visitors].flat())).filter(name => !currFriends.includes(name) && name !== user);
  const friendPoint = {};
  let friendEntry = [];

  currFriends.forEach(friend => friendEntry = [...friendEntry, ...friends.filter(entry => !entry.includes(user) && entry.includes(friend))]);
  
  answer.forEach(name => {
    friendPoint[name] = friendEntry.filter(friend => friend.includes(name)).length * 10;
    friendPoint[name] = (friendPoint[name] || 0) + visitors.filter(visitor => visitor === name).length;
  });
  
  answer = answer.filter(name => friendPoint[name] !== 0);
  
  return answer.sort((x, y) => {
    if (friendPoint[x] > friendPoint[y]) return -1;
    else if (friendPoint[x] < friendPoint[y]) return 1;
    else return x > y ? 1 : -1;
  });
}

module.exports = problem7;
