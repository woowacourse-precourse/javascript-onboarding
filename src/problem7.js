function problem7(user, friends, visitors) {
  const userFriends=[];
  friends.forEach((friendArr) => {
    if(friendArr.includes(user)) {
      friendArr.forEach((man) => {
        if(man!==user) userFriends.push(man);
      })
    }
  })
}

module.exports = problem7;