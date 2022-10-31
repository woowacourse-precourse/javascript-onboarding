function problem6(forms) {
  const answer = []
  const temp = new Set()
  const trieMap = new Map()

  for (let form of forms) {
    const [email, name] = form
    const len = name.length
    let j = 1

    for (let i = 0; i < len-1; i++) {
      const cur = name[i]
      const next = name[j]
      
      // 현재 글자가 있다면
      if (trieMap.has(cur)) {
        // 다음 글자를 포함하는 map을 가져오고
        let map = trieMap.get(cur)
          // map에 다음 글자가 있다면
        if (map.has(next)) {
          const arr = map.get(next)
          arr.push(email)
          for (let e of arr) temp.add(e)
          map.set(next, arr)
          // map에 다음 글자가 없다면 
        } else {
          const arr = [email]
          map.set(next, arr)
        }
        trieMap.set(cur, map)
      // 현재 글자가 없다면  
      } else {
        // trieMap에 map을 만들어주고 map에 next를 넣어줌
        // key : value
        // next: []: 이메일
        const map = new Map()
        const arr = [email]
        map.set(next, arr)
        trieMap.set(cur, map)

      }
      j++

    }
  }

  answer.push(...temp)
  answer.sort()
  return answer;
}

module.exports = problem6;