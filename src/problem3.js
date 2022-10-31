function problem3(number) {
  var count = 0
  for(var i = 1; i<number + 1 ;i++){

    var arr = Array.from(String(i))


    if(arr.includes('3')||arr.includes('6') || arr.includes('9') ){

     var temp = arr.filter(function(x){
      return x == '3'|| x == '6' || x == '9'
      
     })
     count += temp.length
     
    }
    

  }
  return count
}

module.exports = problem3;
console.log(problem3(13))
