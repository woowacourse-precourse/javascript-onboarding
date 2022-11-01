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
function findVisit(user, friends, visitors){
  let result=[];
  const user_friends= alreadyFriend(user,friends);
  for(let i=0;i<visitors.length;i++){
          if(!user_friends.includes(visitors[i])){
              result.push(visitors[i]);
          }
  }
  return result;
}
function problem7(user, friends, visitors) {
  let answer;
  return answer;
}
module.exports = problem7;
