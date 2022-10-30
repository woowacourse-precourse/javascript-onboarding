function problem7(user, friends, visitors) {
  var answer;
  const friendList = makeFriendList(friends)
  const userFriend = friendList[user]
  let preRecommendObj= sharedFriend(userFriend,friendList)
  preRecommendObj = visitFriend(visitors, preRecommendObj)

  



  return recommendObj;
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
  let sharedObj = {}
  for(let name of Object.keys(friendList)){
    //user 제외 //이미 친구인 사람 제거.
    if(isFriend(name, userFriend)){
      continue
    }
    if(name!==user){
      let sharedFriend =userFriend.filter(
        friend=>friendList[name].includes(friend)
      )
      if(sharedFriend.length!==0){
        sharedObj[name]=sharedFriend.length*10
      }
    }
  }
  return sharedObj
}

function visitFriend(userFriend, visitors, recommendObj){
  return visitors.reduce(function(obj,item){
    if(isFriend(item,userFriend)){
      return obj
    }
    if(!obj[item]){
      obj[item]=0
    }
    obj[item]+=1
    return obj
  },recommendObj)
}

function isFriend(name, userFriend){
  if(userFriend.includes(name)){
    return true
  }
  return false
}

function preAnswer(preRecommendObj){
  const sortable = Object.entries(result)
}




module.exports = problem7