function problem7(user, friends, visitors) {
  var answer;
  let result = {}
  const friendList = makeFriendList(user,friends)
  let userFriend = friendList[user]
  
  return answer;
}

function makeFriendList(friends){
  return friends.reduce(function(obj,item){
    for(let i in item){
        if(!obj[item[i]]){
            obj[item[i]]=[item[1-i]]
        }else{
            obj[item[i]].push(item[1-i])
        }
    }
    return obj
  },{})
}




module.exports = problem7;
