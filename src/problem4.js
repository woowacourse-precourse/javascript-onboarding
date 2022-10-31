function problem4(word) {
  var answer = "";
    var arr1 = new Array(26).fill().map((_,i) => String.fromCharCode(i + 65));
    var arr2 = new Array(26).fill().map((_,i) => String.fromCharCode(i + 97));
    var arr = word.split('');

    for(var i=0; i<arr.length; i++) {
        if( arr1.includes(arr[i]) == true) {
            answer += arr1[26-1-arr1.indexOf(arr[i])]
        } else if ( arr2.includes(arr[i]) == true )
        answer += arr2[26-1-arr2.indexOf(arr[i])]
        else {
            answer += arr[i];
        }
    }
    return answer;
}

module.exports = problem4;
