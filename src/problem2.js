function problem2(cryptogram) {
  if (cryptogram === ""){
    return ""
  }
  let lst = [...cryptogram];
  while (true) {
    let cnt = 0;
    let l = lst.length
    for (let i = 0; i < l-1; i++) {
      cnt += 1;
      if (lst[i] === lst[i+1]) {
        if (i+2 < l) {
          let lst2 = lst.slice(0,i);
          let lst3 = lst.slice(i+2);
          lst = lst2.concat(lst3);
        }
        else {
          lst = lst.slice(0,i);
        }
        break
      }
    }
    if (cnt === l-1) {
      let answer = ''
      for (let i = 0; i < lst.length; i++){
        answer += lst[i];
      }
      return answer
    }
  }
}

module.exports = problem2;