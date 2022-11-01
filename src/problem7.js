function alreadyFriend(user, friends) {
  let user_friends = [];
  for (let i = 0; i < friends.length; i++) {
      if (user == friends[i][0]) {
          user_friends.push(friends[i][1]);
      }
      if (user == friends[i][1]) {
          user_friends.push(friends[i][0]);
      }
  }return user_friends;
}
function shareFriend(user,friends){
  let share_friends=[];
  let user_friends= alreadyFriend(user,friends);
  for(let i=0;i<user_friends.length;i++){
      for(let j=0;j<friends.length;j++){
          if(user_friends[i]==friends[j][0]&&friends[j][1]!=user){
              share_friends.push(friends[j][1]);
          }
          if(user_friends[i]==friends[j][1]&&friends[j][0]!=user){
              share_friends.push(friends[j][0]);
          }
      }
  }return share_friends;
}
function userVisit(user, friends, visitors){
  let user_visitors=[];
  const user_friends= alreadyFriend(user,friends);
  for(let i=0;i<visitors.length;i++){
          if(!user_friends.includes(visitors[i])){
            user_visitors.push(visitors[i]);
          }
  }return user_visitors;
}
function countScore(share_user,visit_user){
  let score=[];
  for(let i=0;i<share_user.length;i++){
      for(let j=0;j<10;j++){
          score.push(share_user[i]);
      }
  }
  for(let i=0;i<visit_user.length;i++){
          score.push(visit_user[i]);
  }
  let user_score = score.reduce((acc,cur)=>{
      acc.set(cur,(acc.get(cur)||0)+1);
      return acc;
  },new Map());
  let recommend_user=[];
  let sort = new Map([...user_score].sort((a, b) => b[1] - a[1]));
  for(let[key,value] of sort){
    if(value!=0){
      recommend_user.push(key);
    }
  }return recommend_user;
}
function problem7(user, friends, visitors) {
  let answer;
  let visit_user = userVisit(user, friends, visitors);
  let share_user=shareFriend(user, friends, visitors);
  answer=countScore(share_user,visit_user);
  return answer;
}
module.exports = problem7;