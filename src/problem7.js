function problem7(user, friends, visitors) {
  let answer = []
  
  let friendDict = getFriendDict(friends)
  let userFriend = friendDict[user]
  let score = []

  // 방문자 및 친구 목록의 인원 리스트
  let otherUsers = Object.keys(friendDict).filter(x => x != user)
  visitors.forEach(element =>{
    if(! otherUsers.includes(element)){
      otherUsers.push(element)
      friendDict[element] = []
    }
  })

  // 친구 추천이므로 이미 친구인 리스트는 제외한다
  otherUsers = otherUsers.filter(x => ! userFriend.includes(x))

  // 점수 구하기
  otherUsers.forEach(otherUser =>{
    let otherUserFriends = friendDict[otherUser]
    let shareFriend = otherUserFriends.filter(x => userFriend.includes(x))
    let shareFriendCount = shareFriend.length

    let visitCount = visitors.reduce((cnt, element) => {
      return cnt + (otherUser === element)
    }, 0)
    score.push([otherUser, (shareFriendCount * 10) + visitCount])
  })

  // 정렬 및 상위 5건 
  score = score.filter(x => x[1] != 0)
  score.sort((a,b) =>{
    if(b[1] == a[1]){
      if(a[0] < b[0]){
        return -1
      }
      else{
        return 1
      }
    }
    return b[1] - a[1]
  })
  score = score.slice(0,5)
  score.forEach(element =>{
    answer.push(element[0])
  })

  return answer;
}

// 친구목록 객체 반환
function getFriendDict(friends){
  let friendDict = {}
  friends.forEach(friendPair => {
    let userA, userB
    [userA, userB] = friendPair
    if(Object.keys(friendDict).includes(userA)){
      friendDict[userA].push(userB)
    }
    else{
      friendDict[userA] = [userB]
    }
    if(Object.keys(friendDict).includes(userB)){
      friendDict[userB].push(userA)
    }
    else{
      friendDict[userB] = [userA]
    }
  });

  return friendDict
}

module.exports = problem7;