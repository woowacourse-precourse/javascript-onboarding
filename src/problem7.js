function problems(user,friends,visitors){

  let snsNetwork= new Graph()
  let scoreBoard=[]
  let usersFriend=[]
  let recommentFriends=[]


  for (let friend of friends)
      snsNetwork.addEdge(friend[0],friend[1])

  for (let friend of visitors)
  {
      snsNetwork.addVertex(friend)
      snsNetwork.adjacencyList[friend][0]= snsNetwork.adjacencyList[friend][0]+1
  }

  usersFriend=snsNetwork.adjacencyList[user]
  usersFriend.shift()

  for (let friend of usersFriend){    
      x=snsNetwork.adjacencyList[friend]
      x.shift()
      recommentFriends.push(x)   
  }
  console.log(snsNetwork.adjacencyList['donut'].length)
  console.log(usersFriend)
  console.log(snsNetwork.graphSize(),snsNetwork.adjacencyList)

  
}


class Graph {
  constructor() {
      this.adjacencyList = {}
  }
  addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [0]
  }
  addEdge(vertex1, vertex2) {
      this.addVertex(vertex1)
      this.addVertex(vertex2)
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
  }

  graphSize(){
      return (Object.keys(this.adjacencyList).length)
  }
}


problems("mrko",[ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ],["bedi", "bedi", "donut", "bedi", "shakevan"])
  

module.exports = problem7;
