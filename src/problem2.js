function problem2(cryptogram) {}

module.exports = problem2;

//problem 2 기능 목록
//[]빈 배열 array를 설정하여 cryptogram의 문자를 순서대로 담기 위해 활용한다.
//[]for 반복문을 이용하여 array에 cryptogram의 문자를 순서대로 담는다.
//  []문자를 array에 저장할 때 마다 마지막에 추가된 문자가 이전 반복 시에 추가된 문자와 동일한지 확인한다.
//    []동일한 문자로 확인될 경우 가장 최근에 저장된 두 개의 문자를 삭제한다.
//[] join 메서드를 사용하여 array 배열을 하나의 문자열로 합친다.