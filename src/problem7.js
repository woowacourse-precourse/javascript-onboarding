function problem7(user, friends, visitors) {
  const answer = new PriorityQueue()
  const map = new Map()
  const set = new Set()
  const graph = new Graph()

  for (let [a, b] of friends) {
    graph.insert(a,b)
    graph.insert(b,a)
  }
  
  // 친구의 친구들
  const userFriends = graph.arr[user]
  if (userFriends) {
    for (let friend of userFriends) {
      set.add(friend)
      const nextFriend = graph.arr[friend]
      for (let f of nextFriend) {
        if (f !== user) map.set(f, graph.arr[f].length * 10)
      }
    }
  }

  // 방문자들
  for (let visitor of visitors) {
    if (!set.has(visitor)) map.set(visitor, map.get(visitor)+1 || 1)
  }
  
  for (let [k, v] of map) {
    answer.enqueue(k, v)
  }
  const bucket = new Map()
  for (let [key, val] of map) {
    if (bucket.has(val)) {
      const a = bucket.get(val)
      a.push(key)
      bucket.set(val, a)
    }
    else bucket.set(val, [key])
  }
  const res = new Set()
  for (let [key, weight] of answer.arr) {
    const list = bucket.get(weight)
    list.sort()
    for (let x of list) res.add(x)
    if (res.length >= 5) {
      return [...res.values()].slice(0, 5)
    }
  }
  // 정렬 구현  
  return [...res.values()].slice(0,5)
}

class PriorityQueue {
  constructor() {
    this.arr = []
  }
  enqueue(key, weight) {
    let check = false
    const len = this.arr.length
    for (let i = 0; i < len; i++) {
      const temp = this.arr[i][1]
      
      if (temp < weight) {
        check = true
        this.arr.splice(i, 0, [key, weight])
        
        if (this.arr.length > 5) this.dequeue()
        break;
      }
    }
    
    if (!check) this.arr.push([key, weight])
  }

  dequeue() {
    return this.arr.pop()
  }
  getValue() {
    const res = []
    const len = this.arr.length
    for (let i = 0; i < len; i++) {
      res.push(this.arr[i][0])
    }
    return res
  }
}

class Graph {
  constructor() {
    this.arr = []
  }
  insert(key, val) {
    if(this.arr[key] == null) this.arr[key] = []
    this.arr[key].push(val)
  }
}

module.exports = problem7;
