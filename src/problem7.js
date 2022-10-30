function problem7(user, friends, visitors) {
  let answer=[];
  let fri=[]
  let total_pr=new Map()

  for(let i=0;i<friends.length;i++){
    for(let j=0;j<2;j++){
      if(friends[i][j]!==user){
        total_pr.set(friends[i][j],0)
      }
    }
    if(user==friends[i][0]){
      fri.push(friends[i][1])
    }
    else if(user==friends[i][1]){
      fri.push(friends[i][0])
    }
  }

  for(let i=0;i<friends.length;i++){
    for(let j=0;j<fri.length;j++){

      if(fri[j]===friends[i][0] && friends[i][1]!==user){
        total_pr.set(friends[i][1],total_pr.get(friends[i][1])+10)
      }
      else if(fri[j]===friends[i][1] && friends[i][0]!==user){
        total_pr.set(friends[i][0],total_pr.get(friends[i][0])+10)
      }
    }
  }

  for(let i=0; i<visitors.length;i++){
    if(total_pr.get(visitors[i])===undefined){
     total_pr.set(visitors[i],0) 
    }
    total_pr.set(visitors[i],total_pr.get(visitors[i])+1)
  }

  let result=[...total_pr].sort((a,b)=>a[1]-b[1]).reverse()
  console.log(result)
  for(let i=0;i<result.length-1;i++){
    if(result[i][1]==result[i+1][1]){
      if (result[i][0]>result[i+1][0]){
        let tmp=result[i]
        result[i]=result[i+1]
        result[i+1]=tmp
      }
    }
    if(result[i][1]!==0){
    answer.push(result[i][0])
    }
  }
  if(result[result.length-1][1]!==0){
    answer.push(result[result.length-1][0])
  }
  answer = answer.filter(x=>!fri.includes(x))
  if(answer.length>5){
  answer= answer.slice(0,5)
  }
  return answer;
}
// user="mrko"
// friends=[ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
// visitors=["bedi", "bedi", "donut", "bedi", "shakevan"]
// problem7(user, friends, visitors)


module.exports = problem7;
