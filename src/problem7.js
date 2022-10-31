function problem7(user, friends, visitors) {
  
  const userfriends = [],
        friendoffriends = [];

  friends.filter((a) => a.includes(user)).filter((a) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== user) userfriends.push(a[i]);
    }
  });

  for (let i = 0; i < userfriends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j].includes(userfriends[i]) && !friends[j].includes(user)) 
      {
        friendoffriends.push((friends[j].filter((a) => !a.includes(userfriends[i]))).join(""));
      } 
    } 
  };

}

module.exports = problem7;
