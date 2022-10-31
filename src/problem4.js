function problem4(word) {
  //청개구리는 영어로 tree frog
 const tree_frog = new Object();
 let upper = 122
 let lower = 90

 for(let i = 0;i<=25;i++){ // 알파벳 갯수 25개 대문자 소문자 각각 청개구리에 추가
  tree_frog[String.fromCodePoint(97+i)] = String.fromCodePoint(upper); //소문자 추가
  tree_frog[String.fromCodePoint(65+i)] = String.fromCodePoint(lower); // 대문자 추가
  upper-=1
  lower-=1
  }


  let result = ""
  //word 하나씩 비교하면서 result에 추가 후 리턴
  for(let i =0;i<word.length;i++){
    word[i] === " "? result+= word[i] : result+= tree_frog[word[i]]
  }

  return result
}

module.exports = problem4;

// 엄마말씀 word
// A:Z
// B:Y
// 아스키코드와 반복문으로 알파벳 objet 생성

// 아스키 97~122 a-z 소문자 아스키 65~90  대문자
// String.fromCodePoint(97) > a