function makeGraph(friends){
  let graph = new Map();

  for(let friend of friends){
    graph.set(friend[0], []);
    graph.set(friend[1], []);
  }

  for(let friend of friends){
    graph.get(friend[0]).push(friend[1]);
    graph.get(friend[1]).push(friend[0]);
  }
  // graph.forEach((value, key)=> {
  //   console.log(`key : ${key}, value : ${value}`);
  //   console.log(value[0], value[1]);
  // });
  return graph;
}



function problem7(user, friends, visitors) {
  let answer;
  // map을 만들어서 각 사람마다 점수 부여
  let map = new Map();

  // 그래프 생성
  const graph = makeGraph(friends);

  // console.log(graph.get(user));

  console.log(graph);

  // 일단 점수 0으로 초기화
  for(friend of friends){
    if(!map.has(friend[0])){
      map.set(friend[0], 0);
    }
  }
  const userFriends = graph.get(user);
  graph.forEach((value, key)=> { // m : [a, b, c];
    if(!map.has(key)) {
      map.set(key, 0);
    }
    for(let i = 0; i<value.length; i++){ // 
      if(key === user){
        map.set(value[i], map.get(value[i] + 10));
      }
    }
    userFriends.map((friend) => {
      if (value.includes(friend) && map.has(key)) {
        map.set(key, map.get(key) + 10);
      }
    });

    console.log(map);

    // console.log(`key : ${key}, value : ${value}`);
  });



  // user와 친구관계 확인
  // for(friend of friends){
  //   if(!map.has(friend[1])){
  //     map.set(friend[1], 0);
  //   }
  //   if(friend[0] === user){
  //     map.set(friend[1], map.get(friend[1])+10);
  //   }
  //   if(friend[1] === user){
  //     map.set(friend[0], map.get(friend[1])+10);
  //   }
  // }

  // console.log(map);



  return answer;
}

module.exports = problem7;
