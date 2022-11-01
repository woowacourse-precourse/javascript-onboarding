function alreadyFriend(user, friends) {
  let result = [];
  for (let i = 0; i < friends.length; i++) {
      if (user == friends[i][0]) {
          result.push(friends[i][1]);
      }
      if (user == friends[i][1]) {
          result.push(friends[i][0]);
      }
  }
  return result;
}
function shareFriend(user,friends){
  const share_friends=[];
  const user_friends= alreadyFriend(user,friends);
  for(let i=0;i<user_friends.length;i++){
      for(let j=0;j<friends.length;j++){
          if(user_friends[i]==friends[j][0]&&friends[j][1]!=user){
              share_friends.push(friends[j][1]);
          }
          if(user_friends[i]==friends[j][1]&&friends[j][0]!=user){
              share_friends.push(friends[j][0]);
          }
      }
      
  }
  return share_friends;
}
function userVisit(user, friends, visitors){
  let result=[];
  const user_friends= alreadyFriend(user,friends);
  for(let i=0;i<visitors.length;i++){
          if(!user_friends.includes(visitors[i])){
              result.push(visitors[i]);
          }
  }
  return result;
}
function countScore(share,visit){
  let score=[];
  for(let i=0;i<share.length;i++){
      for(let j=0;j<10;j++){
          score.push(share[i]);
      }
  }
  for(let i=0;i<visit.length;i++){
          score.push(visit[i]);
      
  }
  const result = score.reduce((accu,curr)=>{
      accu.set(curr,(accu.get(curr)||0)+1);
      return accu;
  },new Map());
  let arr=[];
  let sorted = new Map([...result].sort((a, b) => b[1] - a[1]));
  for(let[key,value] of sorted){
      arr.push(key);
  }
  return arr;
}



function problem7(user, friends, visitors) {
  let answer;
  let visit = userVisit(user, friends, visitors);
  let share=shareFriend(user, friends, visitors);
  answer=countScore(share,visit);
  return answer;
}


module.exports = problem7;