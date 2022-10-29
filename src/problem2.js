function problem2(cryptogram) {

    var cry_arr = cryptogram.split("");

    var i = 0;
    while(i != cry_arr.length) {
      if(cry_arr[i] == cry_arr[i+1]) {
        cry_arr.splice(i,2);
        console.log(cry_arr)
        i = 0;
      } else {
        i += 1;
      }
    }      
    return cry_arr.join("");
}

module.exports = problem2;
