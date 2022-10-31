function problem7(user, friends, visitors) {
  var answer = [];
  var tot_list = []
  var user_s_friends = [user]
  for (let i = 0; i < friends.length; i++){
    if (friends[i][0] === user){
      user_s_friends.push(friends[i][1])
    } else if (friends[i][1] === user){
      user_s_friends.push(friends[i][0])
    }
    tot_list.push(friends[i][0])
    tot_list.push(friends[i][1])
  }
  tot_list = new Set(tot_list.concat(visitors))
  tot_list.forEach((nm)=> {
    if (user_s_friends.includes(nm)){
      tot_list.delete(nm)
    }
  })

  
  target_list = {}
  tot_list = [...tot_list].map((e) => {
    target_list[e] = 0
  })

  const truth_tb = [0, 1] 
  truth_tb.forEach((k) => {
    for (let i = 0; i < friends.length; i++) {
      if (user_s_friends.includes(friends[i][k%2]) === false){
        if (user_s_friends.includes(friends[i][(k+1)%2]) === true){
          target_list[friends[i][k%2]] += 10
        }
      }
    }
  })

  for (let i = 0; i < visitors.length; i++) {
    if (user_s_friends.includes(visitors[i]) === false){
      target_list[visitors[i]] += 1
    }
  }
  
  for (let i in target_list){
    answer.push([i, target_list[i]])
  }
  answer = answer.sort((a, b) => (a[1]!== b[1])? b[1]-a[1] : a[0]-b[0]).map((e)=>e[0])

  return answer;
}

module.exports = problem7;
