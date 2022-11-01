function problem7(user, friends, visitors) {
  const userFriends=[];
  friends.forEach((friendArr) => {
    if(friendArr.includes(user)) {
      friendArr.forEach((man) => {
        if(man!==user) userFriends.push(man);
      })
    }
  })

  const scoreMap = new Map();
  friends.forEach((friendArr) => {
    friendArr.forEach((name, idx) => {
      if(name!==user && userFriends.includes(name)) {
        const recommendedFr = friendArr[1-idx];
        if(recommendedFr!==user) {
          if(scoreMap.has(recommendedFr)) scoreMap.set(recommendedFr, scoreMap.get(recommendedFr)+10);
          else scoreMap.set(recommendedFr, 10);
        }
      }
    })
  })
}

module.exports = problem7;