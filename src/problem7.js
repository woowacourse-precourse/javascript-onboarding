function problem7(user, friends, visitors) {
  let friendsOfUser = [];

  friends.map(friend => {
    for(let i = 0; i < friend.length; i++){
      if(friend[i] === user){
        i === 0? friendsOfUser.push(friend[1]) : friendsOfUser.push(friend[0]);
      }
    }
  })
}

module.exports = problem7;
