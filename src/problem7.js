function problem7(user, friends, visitors) {
  var answer;
  let flist = {};

  //1. friends, visitors 합쳐 중복 없앤 후 친구 후보 목록 만들기
  let fkeys = friends.reduce(function (acc, cur){
    return acc.concat(cur);
  })
  visitors.map(item => fkeys.push(item));

  const set = new Set(fkeys);
  set.delete(user);

  //이름 : 0점 
  set.forEach(element => {
    flist[element] = 0;
  });


  

  return answer;
}

problem7(
  "mrko",
        [
          ["donut", "andole"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan"]
);

module.exports = problem7;
