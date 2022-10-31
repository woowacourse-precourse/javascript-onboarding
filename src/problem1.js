function problem1(pobi, crong) {
    //에러핸들링
    function checkError(arr) {
      //오른쪽 페이지는 왼쪽 페이지 + 1 이여야 함
      if (arr[0] + 1 !== arr[1]) return false;
  
      //왼쪽은 홀수,오른쪽 페이지 짝수이여 함
      if (arr[0] % 2 !== 1 || arr[1] % 2 !== 0) return false;
  
      //왼쪽페이지 첫페이지나 오른쪽 마지막페이지가 나오면 안됨
      if (arr[0] === 1 || arr[1] === 400) return false;
  
      //모두 통과해야 true
      return true;
    }
  
    if (!checkError(pobi) || !checkError(crong)) return false;
}

module.exports = problem1;
