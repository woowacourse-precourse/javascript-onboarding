function problem7(user, friends, visitors) {
  const network = new Map()
  const personalData = new Map()

  const createData = (uid, friendsId) => {
    let arr = []
    if(network.has(uid)){
      arr = network.get(uid)
      if(friendsId !== user){
        arr.push(friendsId)
      }
    } else {
      arr = new Array(friendsId)
      personalData.set(uid, 0)
    }
    network.set(uid, arr)
  }

  friends.map((item) => {
    const [uid, friendId] = item
    createData(uid, friendId)
    createData(friendId,uid) 
})

  visitors.map((person) => {
    if(personalData.has(person)){
      personalData.set(person, personalData.get(person) +1)
      if(network.has(person)){
        if(network.get(user).includes(person)){
          let hisFriends = network.get(person)
          hisFriends.filter((who)=>{
            personalData.set(who, personalData.get(who) + 10)
          })
        }
      }
    } else {
      personalData.set(person, 1)
    }
  })

  personalData.forEach((value,key)=>{
    if(key === user || network.get(user).includes(key)){
      personalData.delete(key)
    }
  })

  let answer = new Map(
    [...personalData.entries()].sort((a,b) => {
      if (a[1] === b[1]){
        return a[0].localeCompare(b[0])
      }
      return b[1] - a[1]
    })
  )
  console.log(answer)
  return [...answer.keys()]
}

module.exports = problem7;
