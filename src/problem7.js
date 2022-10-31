function problem7(user, friends, visitors) {
  
  const userfriends = [];

  friends.filter((a) => a.includes(user)).filter((a) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== user) userfriends.push(a[i]);
    }
  });

}

module.exports = problem7;
