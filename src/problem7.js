function problem7(user, friends, visitors) {
  var answer;
  let recommand = [];
  let key= new Set();
  for(let i=0;i<friends.length;i++){
    if(friends[i][0]==user) key.add(friends[i][1]);
    if(friends[i][1]==user) key.add(friends[i][0]);
  }
  let arr = [...key];
  for(let i=0;i<arr.length;i++){
    for(let j =0;j<friends.length;j++){
      if(friends[j][0].includes(arr[i]) && friends[j][1]!=user) {
          recommand.push({name:friends[j][1], score:10})
      }
      if(friends[j][1].includes(arr[i])&& friends[j][0]!=user) {
        recommand.push({name:friends[j][0], score:10})
      }
    }
  }
  for(let i=0;i<visitors.length;i++){
      recommand.map(x=>{
        if(x.name == visitors[i]){
          x.score+=1;
        }
        else {
          recommand.push({name:visitors[i], score:1})
        }
      })
  }
  for(let i=0;i<arr.length;i++){
  recommand = recommand.filter(o => o.name !== arr[i]);
  }//이미 친구면 제거
  recommand = recommand.reduce(function(acc, current) {
    if (acc.findIndex(({ name }) => name === current.name) === -1) {
      acc.push(current);
    }
    return acc;
  }, []); //객체 배열중복제거
 
  recommand = recommand.sort(function (a, b) {
    if (a.score == b.score) {
     if(a.name<b.name) return -1
     if(a.name>b.name) return 1
     else return 0;
    }
    else return a.score+b.score;
}); //추천 점수 높은 순, 추천 점수가 같은 경우는 이름순 정렬

 answer = (recommand.map(x=>x.name)).slice(0,5);
 
  return answer;
}

module.exports = problem7;
