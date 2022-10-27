function problem2(cryptogram) {
  const arr = [...cryptogram];
  let i=0;
  let cntbox  = [];
  let check = false;
  // let current = 0;
  //순차적으로 탐색후 중복 발견하면 계속 탐색하고 끝나면 탐색한 부분까지 제거후 다시 원점으로 복귀를 반복
  while(1){
    if((arr[i]===arr[i+1]) && ((arr.length)!==i)){
      cntbox.push(i);
      check=true;
      i++;
      continue;
    }
    else if((arr[i]!==arr[i+1]) && ((arr.length)!==i) && !check){
      i++;
      continue;
    }
    else if((arr[i]!==arr[i+1]) && ((arr.length)!==i) && check ){
      arr.splice(cntbox[0],cntbox.length+1);
      i=0;
      cntbox = []
      check = false;
      continue;
    }
    
    if(arr.length === i)
      break;
  }
  return arr.join('');
}

module.exports = problem2;
/**
    while(i!==arr.length){
      if(arr[i]===arr[i+1]){
        arr.splice(i,2);    
          i=0;
      }
      else{
          i++;
      }
    }

        if(arr[i]===arr[i+1]){
        cnt++;
        i++;
    }
    else{
        arr.splice(i-cnt,cnt);
        i=0;
        cnt = 1;
    }
 */