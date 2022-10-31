function problem7(user, friends, visitors) {
  let dic = {}
  let dic2 = {}
  let answer = []
  
  for(let i of friends){
    
    dic[i[0]] = []
    dic[i[1]] = []
  }
  for(let i of friends){
    
    dic2[i[0]] = 0
    dic2[i[1]] = 0
  }

  for(let i of visitors){
    dic2[i] = 0
  }
  for(let i of friends){
   
    dic[i[0]].push(i[1])
    dic[i[1]].push(i[0])
  }


for(let i of dic[user]){
  for(let j of dic[i]){
    dic2[j] += 10
  }
}

for(let i of visitors){
dic2[i] += 1

}

delete dic2[user]
for(let i of dic[user]){
delete dic2[i]

}
dic2 = Object.entries(dic2)
dic2.sort(function(a,b){
return b[1]- a[1]

})


for(let i = 0; i<6; i++)
{ 
  
  answer.push(dic2[i][0])
  if(dic2[i+1] == undefined){break}
}
  return answer

}

module.exports = problem7;

problem7("mrko",[ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ],
["bedi", "bedi", "donut", "bedi", "shakevan"]

)