function problem7(user, friends, visitors) {
  var answer= [];
  let temp = []
  let sideFriend = []
  let showFriend = []
  let boolean = false;
  let use = user
  let friend = friends
  let visitor = visitors

  // 유저와 친구인 사람의 친구에게 10점을 준다.
  for (let i = 0; i < friend.length; i++) {
    temp = friend[i];
    if (temp.includes(use)) {
      sideFriend.push(temp[0])
      sideFriend.push(temp[1])
    }
    sideFriend = sideFriend.filter((element) => element !== use);
  }
  //친구의 친구에게 10점을 준다. 단 중복시에도 점수는 한번만 준다.
  for (let i = 0; i < friend.length; i++) {
    temp = friend[i]
    for (let j = 0; j < sideFriend.length; j++) {
      if (temp.includes(sideFriend[j])) {
        showFriend.push(temp[0])
        showFriend.push(temp[1])
      }
    }
    showFriend = [...new Set(showFriend)]
  }
  for (let k = 0; k < sideFriend.length; k++) {
    showFriend = showFriend.filter((element) => element !== sideFriend[k])
    showFriend = showFriend.filter((element) => element !== use)
  }
  for (let i = 0; i < showFriend.length; i++) {
    showFriend[i] = [showFriend[i], 10]
  }
  for (let i = 0; i < visitor.length; i++) {
    for (let k = 0; k < showFriend.length; k++) {
      let show = showFriend[k]
      if (visitor[i].includes(show[0])) {
        showFriend[k][1] += +1
        boolean = true;
        break;
      } else {
        boolean = false;
      }
    }
    if (!boolean) {
      showFriend.push([visitor[i], 1])
      boolean = true;
    }
  }
  for (let k = 0; k < sideFriend.length; k++) {
    showFriend = showFriend.filter((element) => element[k] !== sideFriend[k])
    showFriend = showFriend.filter((element) => element[k] !== sideFriend[k + 1])
  }
  showFriend = showFriend.sort()
  showFriend = showFriend.sort((a, b) => b[1] - a[1]);
  for(let i = 0 ; i < showFriend.length ; i++){
    showFriend[i].pop()
  }

  answer = showFriend
  return answer;
}
let str = problem7("mrko" , [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ] ,["bedi", "bedi", "donut", "bedi", "shakevan"] )
console.log(str)


module.exports = problem7;
