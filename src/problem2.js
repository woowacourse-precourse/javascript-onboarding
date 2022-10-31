// str_arr 배열에 split("")으로 넣고
// 배열 2개씩 검사해서 똑같으면 그배열 삭제
// 배열 끝 만나면 배열.join("") 리턴

function problem2(cryptogram) {
  let str_arr = cryptogram.split("")

    for(let i=0;i<str_arr.length;i++){
      if(str_arr[i] === str_arr[i+1]){
        str_arr.splice(i,2)
        return problem2(str_arr.join("")) // 중복 만나면 배열 자르고 재귀
      }
      // i가 끝까지 가면 탈출 ! 
    }
    return str_arr.join("")
}

// "browoanoommnaon"
// "browoannaon"
// "browoaaon"
// "browoon"
// "brown"

module.exports = problem2;
