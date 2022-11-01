function problem7(user, friends, visitors) {
  let answer =[];
  let relation = new Map();

  friends.forEach((friend) => {
    if(friend.indexOf(user) === -1)
    {
      friend.forEach((score)=>relation.set(score, 10));
    } else {
      friend.forEach((score) => relation.set(score, 0));
    }
  });

  visitors.forEach((visitor)=>{
    if(!relation.has(visitor))
    {
      relation.set(visitor, 1);
    }
  });

  let score = [...relation].sort((a, b)=>{
    if(a[1] === b[1]){
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  
  for(let i = 0; i < 5; i++){
    if(score[i][1] !== 0)
    {
      answer.push(score[i][0]);
    }
  }

  return answer;
}
module.exports = problem7;