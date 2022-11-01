function problem2(cryptogram) {
  var answer
  var temp
  var empty = []
  var mySwitch = true
  temp = [...cryptogram]

  while (mySwitch) {
    empty = []
    mySwitch = false
    for (var i = 0; i < temp.length; i++) {
      
      if (temp[i] == temp[i + 1]) {
        i++
        mySwitch = true
      } else {
        empty.push(temp[i])
      }
    }
    temp = empty
    
  }

  answer = temp.join("")
  return answer;
} 
// console.log(problem2("zyelleyz")) 
module.exports = problem2;

// 주어진 크리토그램을 새변수(answer)에 넣고 반복문을 통해서 인덱스와
// 인덱스+1 비교해서 같으면 무시 다르면 임시 리스트에 넣기
// 새변수를 임시 리스트를 덮어쓰기
// 반복문 돌면서 같은 단어가 없다면 switch 값을 False로 두기 (while 사용 switch가 false일때까지 반복)
// 새변수를 리턴
