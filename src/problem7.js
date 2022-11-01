function problem7(user, friends, visitors) {

  let userFriends = new Array;

  let recommendPoint = new Object

  //사용자의 친구를 구하는 기능
  for (let i = 0; i < friends.length; i++){
    if (friends[i].includes(user)) {
      userFriends.push(friends[i][0]);
    }
  }

  //함께 아는 친구의 수만큼 점수를 부여하는 기능
  friends.forEach(friend => {
    if (userFriends.includes(friend[0]) && friend[1] !== user) {
      if (friend[1] in recommendPoint) {
       recommendPoint[friend[1]] += 10;
      } else recommendPoint[friend[1]] = 10;
    }
  })

  //타임 라인에 방문한 방문자에게 점수를 부여하는 기능
  visitors.forEach(visitor => {
    if (!userFriends.includes(visitor)) {
      if (visitor in recommendPoint) {
        recommendPoint[visitor] += 1;
      } else recommendPoint[visitor] = 1;
    }
  })

  //최대 5명의 추천 친구를 점수 순으로 정렬하는 기능
  const friendList = (list) => {
    let listArr = Object.entries(list)
    .sort((pa, pb) => pb[1] - pa[1])

    let listObj = Object.fromEntries(listArr)
    let listName = Object.keys(listObj)
    listName = listName.slice(0, 5)

    return listName
  }

  return friendList(recommendPoint)
}

module.exports = problem7;
