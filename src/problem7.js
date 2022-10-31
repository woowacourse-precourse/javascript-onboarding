function problem7(user, friends, visitors) {
  const network = new Map()
  const dashboard = new Map()

  const createNetwork = (user1, user2) => {
    let arr = network.get(user1) || []
    arr.push(user2)
    return network.set(user1, arr)
  }

  const createDashboard = (uid,num) => {
    let score = dashboard.get(uid) || 0
    score += num || 1
    return dashboard.set(uid, score)
  }

  const friendList = (uid) => {
    return network.get(uid) || []
  }

  const sugguestion = (other) => {
    return friendList(other).filter(x => !friendList(user).includes(x) &&  x !== user)
  }

  const _sort = (dataMap) => {
    return new Map([...dataMap.entries()].sort((a,b) => {
      if(a[1] === b[1]){
        return a[0].localeCompare(b[0])
      }
      return b[1] - a[1]
    }))
  }

  friends.map((item)=> {
    const [uid, friendId] = item
    createNetwork(uid, friendId)
    createNetwork(friendId, uid)
  })

  visitors.map((item) => {
    if(!friendList(user).includes(item)){
      createDashboard(item)
    }
    sugguestion(item).map((person)=>{
      createDashboard(person, 10)
    })
  })

  let answer = [..._sort(dashboard).keys()].splice(0,5)
  return answer
}
module.exports = problem7;
