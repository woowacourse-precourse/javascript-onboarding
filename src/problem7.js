function problem7(user, friends, visitors) {
  var ans= {};
  var recFreinds = [];
  var myFreinds = [];
  var answer=[];

  friends.forEach(n => {
    if (n[0]===user){
      myFreinds.push(n[1]);
    }else if(n[1]===user){
      myFreinds.push(n[0]);
    }
  });

  myFreinds.forEach(n=>{
    friends.forEach(k=>{
      if(k[0]!==user && k[1]!==user){
        if(k[0]===n){
          recFreinds.push(k[1]);
          console.log(k[1]);
        }
        else if(k[1]===n){
          recFreinds.push(k[0]);
          console.log(k[0]);
        }
      }
    })
  })

  ans = recFreinds.reduce((a, i) => {return a[i]=(a[i]||0)+10, a},{});
  recFreinds=[];

  visitors.forEach(n=>{
    if(!myFreinds.includes(n)){
      recFreinds.push(n);
    }
  })

  var tmp_answer = recFreinds.reduce((a, i) => {return a[i]=(a[i]||0)+1, a},{});
  
  for (var key in tmp_answer) {
    ans[key]=tmp_answer[key];
  }
  console.log(ans);

  for(var key in ans){
    answer.push(key);
  }
  console.log(answer);

  return answer;
}


module.exports = problem7;
