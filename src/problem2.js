function problem2(arr) {
   let cnt=0
    let tmp=[]
    for(var i=0;i<(arr.length);i++){
      if(arr[i]!=arr[i+1]){
          tmp.push(arr[i])
      }
      else{
          for(var j=i;j<(arr.length);j++){
              let tt=0
              if(arr[j]==arr[j+1]){
                  tt+=1
              }
              else{
                  break
              }
              i+=tt
          }
          cnt+=1

      }
  }
    if (cnt!==0){
        return problem2(tmp.join(''))
    }
    else{
        console.log(arr)
        return arr
    }
}

module.exports = problem2;
