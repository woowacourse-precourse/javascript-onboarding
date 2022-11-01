function problem7(user, friends, visitors) {

  const friendsList = {};
  const recomendScore = {}; 
  let res;

  friends.forEach((friend) => {
    const [name1, name2] = friend;
    if (!friendsList[name1]) {
      friendsList[name1] = [];
    }
    if (!friendsList[name2]) {
      friendsList[name2] = [];
    }
    friendsList[name1].push(name2);
    friendsList[name2].push(name1);
  });

  for(let name in friendsList){
    if(name === user) continue;
    
    if(!recomendScore[name]) recomendScore[name]=0;
    
    friendsList[name].forEach((friend) =>{
      if(friendsList[user].includes(friend)){
        recomendScore[name] +=10;
      }
    })
  }

  visitors.forEach((visitor) => {
    if (!recomendScore[visitor]) recomendScore[visitor] = 0;
    recomendScore[visitor] += 1;
  })
  
  res = Object.entries(recomendScore).sort(([, a], [, b]) => b - a);
  res = res.filter((element) => element[1] > 0 && element[0] !== user && !friendsList[user].includes(element[0])).map((ele)=> ele[0]);
  return res;
}


module.exports = problem7;
