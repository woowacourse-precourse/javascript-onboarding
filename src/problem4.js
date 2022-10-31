 //문자의 인덱스를 반환후 reverse 해주는 함수
 const getIndex = (letters, array) => {
    const index = array.indexOf(letters);
    return  array[25 - index];
};


module.exports = problem4;
