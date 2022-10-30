function problem7(user, friends, visitors) {
  var arr = new Map();
  var answer = []
  let closeFreind = findCloseFriends(user,friends);
  arr = scoring(friends,user,visitors,closeFreind);
  arr = [...arr];
  arr.sort((a,b)=>b[0]-a[0]);
  for(let i = 0;i<arr.length;i++){
    answer.push(arr[i][0]);
  }
  return answer;
}
function findCloseFriends(user,friends){
  let result = [];
  for(let i = 0;i<friends.length;i++){
    if(friends[i].includes(user)){
      result.push(friends[i].filter((element)=>element!==user));
    }
  }
  return result;
}
function scoring(friends,user,visitors,array){
  let result = new Map();
  for(let friend of array){
    for(let i=0;i<friends.length;i++){
      if(friends[i].includes(friend[0])&& !friends[i].includes(user)){
        let name = friends[i].filter((element)=>element!==friend[0]);
        if(!result.has(name)){
          result.set(name[0],10);
        }
      }
    }
  }
  for(let visit of visitors){
    if(result.has(visit)){
      result.set(visit,result.get(visit)+1);
    }
    else{
      result.set(visit,1);
    }
  }
  for(let closeFreind of array){
    if(result.has(closeFreind[0])){
      result.delete(closeFreind[0]);
    }
  }
  return result;
}
module.exports = problem7;
