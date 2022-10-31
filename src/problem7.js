function problem7(user, friends, visitors) {
  var answer;
  let flist = {};

  //1. friends, visitors 합쳐 중복 없앤 후 친구 후보 목록 만들기
  let fkeys = friends.reduce(function (acc, cur){
    return acc.concat(cur);
  })
  visitors.map(item => fkeys.push(item));

  const set = new Set(fkeys);

  //이름 : 0점 
  set.forEach(element => {
    flist[element] = 0;
  });


  //2. 점수 매기기 
  //user의 친구 arr
  let userfs = []; //user의 친구
  friends.forEach(function(item){
    if(item.includes(user)){
      userfs.push(item[0]);
    }
  })
  
  let tempfs;
  let f10list = [];
  userfs.forEach(function(userf){
    tempfs = friends.filter(el => el.includes(userf) && !el.includes(user));
    tempfs.map(e => e.splice(e.indexOf(userf),1));
    
    let f = tempfs.reduce((acc,cur) => acc.concat(cur));
    f.map(element => flist[element] += 10);
  })
  
  //1점 점수 매기기
  visitors.map(vele => flist[vele] += 1);

  //3. 출력
  // 0점, 이미 친구인 사람들 지우기 
  let temp = Object.entries(flist).filter(element => element[1] > 0 && !userfs.includes(element[0]));
  
  // 길이가 5이상이면 순위 5까지만 cutting
  if(temp.length > 5){
    for(let i = 0; i < 5; i++){
      answer.push(temp[i][0]);
    }
  }
  else{
    answer = temp.map(element => element[0]);
  }


  return answer;
}

module.exports = problem7;
