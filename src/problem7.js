function problem7(user, friends, visitors) {
  const scores = {};
  const userFriend = [];
  for (let rel of friends){
    if (rel.includes(user)){
      userFriend.push(rel.filter(x => x !== user)[0]);
    }
  }
}

module.exports = problem7;
