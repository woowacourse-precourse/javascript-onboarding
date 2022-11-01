function problem7(user, friend, visitors) {
  var answer=[];
  const Graph={}
  var score = new Map();
  var visited = new Map();
  let friends=friend.filter(element=>element[0]!==element[1])
  const MakeGraph=()=>{
    for(let i=0;i<friends.length;i++){
      if(Graph[friends[i][0]]!==undefined){//tree에 키가 존재한다면
        Graph[friends[i][0]]=[...Graph[friends[i][0]],friends[i][1]]
      }else{//tree에 키가 존재하지 않는다면 
        Graph[friends[i][0]]=[]
        Graph[friends[i][0]]=[...Graph[friends[i][0]],friends[i][1]]
      }
      if(Graph[friends[i][1]]!==undefined){
        Graph[friends[i][1]]=[...Graph[friends[i][1]],friends[i][0]]
      }else{//tree에 키가 존재하지 않는다면 
        Graph[friends[i][1]]=[]
        Graph[friends[i][1]]=[...Graph[friends[i][1]],friends[i][0]]
      }
    }
  }
  const MakeScoreVisit=(user, Graph, visitors)=>{
    score.set(user,0)
    visited.set(user,false)
    for(let i=0;i<Object.keys(Graph).length;i++){
      if(score.get(Object.keys(Graph)[i])===undefined){
        score.set(Object.keys(Graph)[i],0)
      }
      if(visited.get(Object.keys(Graph)[i])===undefined){
        visited.set(Object.keys(Graph)[i],false)
      }
    }
    for(let i=0;i<visitors.length;i++){
      if(score.get(visitors[i])===undefined){
        score.set(visitors[i],0)
      }
      if(visited.get(visitors[i])===undefined){
        visited.set(visitors[i],false)
      }
    }
  }
  const Bfs=(Graph,root)=>{
    class Node{
      constructor(x,depth) {
          this.x = x;
          this.depth = depth;
      }
    }  
    class Queue {
      constructor() {
          this.head = null;
          this.tail = null;
          this.size = 0;
      }
      push(x,depth) {
          let node = new Node(x,depth);
          if (this.size === 0) {
            this.head = node;
          }else{
            this.tail.next = node;
          }
          this.tail = node;
          this.size++;
        }
        shift(){
          let temp = this.head;
          if (this.size === 0) {
            this.head = null;
            this.tail = null;
          } else {
            this.head = this.head.next;
          }
          this.size--;
          return temp;
        }
        length() {
          return this.size;
        }
    }
    let queue=new Queue;
    visited.set(root,true)
    score.set(root,0)
    queue.push(root,0)
    while(queue.length()!==0){
      let cur = queue.shift();
      let depth=cur.depth
      let x=cur.x
      if(depth===2){//친구의친구
        let original_score=score.get(x)
        original_score=original_score+10
        visited.set(x,false)
        score.set(x,original_score)
        continue;
      }
      
      for(let i=0;i<Graph[x].length;i++){
          if(visited.get(Graph[x][i])===false){
              visited.set(Graph[x][i],true)
              queue.push(Graph[x][i],depth+1)
          }
      }
    }
  }
  const VisitScore=(visitors)=>{
    for(let i=0;i<visitors.length;i++){
        let original_score=score.get(visitors[i])
        score.set(visitors[i], original_score+1)
      }
  }

  MakeGraph();
  MakeScoreVisit(user,Graph,visitors);
  for (const [key] of visited) {
   const set = new Set(Graph[key]);
   if(set.size!==0){
    Graph[key]= Array.from(set);
   }
  }
  Bfs(Graph,user)
  VisitScore(visitors);
  Graph[user].map(element=>score.set(element,0))
  const temp_answer= new Map([...score.entries()].sort((a, b) =>{
    if(a[1]>b[1]){
      return -1
    }else if(a[1]<b[1]){
      return 1
    }else if(a[1]===b[1]){
      if(a[0]>b[0]){
        return 1
      }else if(a[0]<b[0]){
        return -1
      }else if(a[0]===b[0]){
        return 0;
      }
    }
  }));

  let cnt=0;
  for (const [key, value] of temp_answer) {
    if(value!==0&&cnt<5){
      cnt++;
      answer.push(key) 
    }
  }
  return answer;
} 
module.exports = problem7;

