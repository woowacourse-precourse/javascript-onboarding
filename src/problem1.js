function problem1(pobi, crong) {
  if (checkInputErr(pobi, crong)) return -1;
  return answer;

}

function checkInputErr(pobi, crong) {

  const validType = () => Array.isArray(pobi) && Array.isArray(crong);
  const validLength = () => pobi.length === 2 && crong.length === 2;
  const validRange = (array) => array.some(data => 1 <= data && data <= 400);
  const validValue = (array) => (array[0]%2 ===1) && (array[1] = array[0]+1);

  if(!validType()) return true;
  else if(!validLength()) return true;
  else if(!validRange(pobi) || !validRange(crong)) return true;
  else if(!validValue(pobi) || !validValue(crong)) return true;
  else return false;
  
}

module.exports = problem1;
