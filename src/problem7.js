function problem7(user, friends, visitors) {
  var answer;
  const friendList = makeFriendList(user,friends)
  const userFriend = friendList[user]
  let recommendObj= sharedFriend(userFriend,friendList)
  recommendObj = visitFriend(visitors, recommendObj)

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

function sharedFriend(userFriend, friendList){
  let recommendObj = {}
  for(let name of Object.keys(friendList)){
    //user 제외
    if(name!==user){
      let sharedFriend =userFriend.filter(friend=>friendList[name].includes(friend))
      sharedFriend.length!==0?result[name]=sharedFriend.length*10:null
    }
  }
  return recommendObj
}

function visitFriend(visitors, recommendObj){
  return visitors.reduce(function(a,b){
    if(!result[b]){
        !userFriend.includes(b)?result[b]=1:null}
    else{
        result[b]+=1}
    return a
  },recommendObj)
}




module.exports = problem7;
