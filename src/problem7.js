function problem7(user, friends, visitors) {
  var answer= []
  let user_friend = []
  let scores = {}

  friends.forEach((friend)=> {
      scores[friend[0]]= 0
      scores[friend[1]]= 0
      if( friend.includes(user)){
          let i = friend.indexOf(user)
          user_friend.push(friend[1-i])
      }
  })
  friends.forEach((friend)=> {
      user_friend.forEach((mutual)=> {
          if(friend.includes(mutual)){
              let i = friend.indexOf(mutual)
              if(friend[1-i]!= user) scores[friend[1-i]] += 10
          }
      })
  })

  visitors.forEach((visitor)=> {
      console.log(visitor)
      scores[visitor] = (scores[visitor]||0) + 1
  })

var sortable = [];
for (var name in scores) {
sortable.push([name, scores[name]]);
}

sortable.sort((a,b)=> {return a[0] === b[0]? 0: a[0]<b[0]?-1:1;})
sortable.sort((a,b)=> b[1]-a[1])

for (let i =0 ; i <5; i++){
  if(!user_friend.includes(sortable[i][0]))
  answer.push(sortable[i][0])
}
  return answer;
}

module.exports = problem7;
