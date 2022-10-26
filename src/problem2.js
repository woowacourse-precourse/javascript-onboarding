//중복 제거
function decryption(cryptogram){
  let before_element = "";
  let delete_index = [];
  let copy_cryptogram = cryptogram;
  //문자열 카피 후 배열로 만듬
  copy_cryptogram = Array.from(copy_cryptogram)
  
  //배열 순차적으로 돌면서 연속되는 글자를 찾은 후 delete_index 배열에 담기
  copy_cryptogram.map((element) =>{
    if(element == before_element){
      delete_index.push(element);
    }
    before_element = element;
  })

  //연속되는 글자 중 중복된 글자 제거
  delete_index = new Set(delete_index)
  delete_index = [...delete_index]

  //연속되는 글자 제거 (정규식 사용)
  delete_index.map(element =>{
    let reg = element + '{2,}'
    let regexAllCase = new RegExp(reg, "gi");
    cryptogram = cryptogram.replace(regexAllCase,"");
  })
}

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;