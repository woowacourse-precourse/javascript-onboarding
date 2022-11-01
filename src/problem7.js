function problem7(user, friends, visitors) {
  var answer;
  const allFriendList = makeFriendList(friends)
  const userFriend = allFriendList[user]
  let recommendObj= sharedFriend(user,userFriend, allFriendList)
  recommendObj = visitFriend(userFriend, visitors, recommendObj)

  let sortedArr = sortedScore(recommendObj)
  answer = preAnswer(sortedArr)
  return answer;
}

function makeFriendList(friends){
  const allFriendList = friends.reduce(function(obj,item){
    for(let idx in item){
      if(!obj[item[idx]]){
          obj[item[idx]]=[item[1-idx]]
          continue
      }
      obj[item[idx]].push(item[1-idx])
    }
    return obj
  },{})
  return allFriendList
}


function sharedFriend( user, userFriend, allFriendList){
  let sharedObj = {}
  for(let name of Object.keys(allFriendList)){
    //user 제외 //이미 친구인 사람 제거.
    if(isFriend(name, userFriend) || name==user){
      continue
    }
    let sharedFriend =userFriend.filter(
      friend=>allFriendList[name].includes(friend)
    )
    if(sharedFriend.length!==0){
      sharedObj[name]=sharedFriend.length*10
    }
  }
  return sharedObj
}

function visitFriend(userFriend, visitors, recommendObj){
  let result = visitors.reduce(function(obj,item){
    if(isFriend(item,userFriend)){
      return obj
    }
    if(!obj[item]){
      obj[item]=0
    }
    obj[item]+=1
    return obj
  },recommendObj)
  return result
}

function isFriend(name, userFriend){
  if(userFriend.includes(name)){
    return true
  }
  return false
}

function sortedScore(preRecommendObj){
  const sortable = Object.entries(preRecommendObj)
  const sortedArr = sortable.sort(
    function([name,score],[nextName,nextScore]){
      if(score<nextScore){
        return 1
      }if(score>nextScore){
        return -1
      }if(score==nextScore){
        let result=0 ;
        name>nextName?result=1:
                      name<nextName?result=-1:result=0
        return result
      }
  })
  return sortedArr
}

function preAnswer(sortedArr){
  return sortedArr.reduce(function(arr,name){
    arr.push(name[0])
    return arr
  },[])
}


module.exports = problem7