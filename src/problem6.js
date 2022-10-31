function problem6(forms) {
  var answer = []
  var dic = {}
  for(let i of forms){
    for(let j =0; j < i[1].length -1; j++ ){
      dic[i[1].slice(j,j+2)] = []
    }
  }
  for(let i of forms){
    for(let j =0; j < i[1].length -1; j++ ){
      dic[i[1].slice(j,j+2)].push(i[0])
    }
  }

  for(let i in dic){
    if(dic[i].length > 1){

      answer.push(...dic[i])
      
    }
  }
 answer = new Set(answer)
 answer = Array.from(answer)
 answer.sort()
 return answer
}







problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ])
module.exports = problem6;
