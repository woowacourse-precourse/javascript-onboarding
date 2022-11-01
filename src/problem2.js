function howManyDuplicate(index, array) {
  let base = array[index];
  let count = 0;

  for (i = index; array[i] == base && i < array.length; i++)
    count++;
  return count;
}

function deleteDuplicateAlpha(array) {
  if (array.length == 0)
    return array;
  
  let newArray = "";
  for (let i = 0; i < array.length;) {
    let count = howManyDuplicate(i, array);
    if (count == 1)
      newArray += array[i];
    i += count;
  }
  return newArray;
}

function solving(cryptogram) {
  let modifiedCryptogram = cryptogram;
  let check;

  while (1) {
    check = modifiedCryptogram;
    modifiedCryptogram = deleteDuplicateAlpha(modifiedCryptogram);
    if (check == modifiedCryptogram)
      break;
  }
  return modifiedCryptogram;
}

function problem2(cryptogram) {
  let answer = solving(cryptogram);
  return answer;
}

module.exports = problem2;
