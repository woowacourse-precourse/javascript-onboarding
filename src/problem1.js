function problem1(pobi, crong) {
  const [leftPagePobi, rightPagePobi] = pobi;
  const [leftPageCrong, rightPageCrong] = crong;

  // 오른쪽 페이지와 왼쪽 페이지의 차이가 1보다 크면 result = -1
  if ((rightPagePobi - leftPagePobi > 1) || (rightPageCrong - leftPageCrong > 1)) return -1
  
  // 페이지 번호를 각 자리 단위로 잘라냄 ex. 97 -> [9, 7]
  const slicedLeftNumberPobi = (leftPagePobi).toString().split('').map(num => parseInt(num))
  const slicedRightNumberPobi = (rightPagePobi).toString().split('').map(num => parseInt(num))
  const slicedLeftNumberCrong = (leftPageCrong).toString().split('').map(num => parseInt(num))
  const slicedRightNumberCrong = (rightPageCrong).toString().split('').map(num => parseInt(num))

  // 포비의 각 자리 숫자의 합과 곱을 구함
  const sumOfSlicedLeftNumberPobi = slicedLeftNumberPobi.reduce((acc, num) => acc + num)
  const productOfSlicedLeftNumberPobi = slicedLeftNumberPobi.reduce((acc, num) => acc * num)
  
  const sumOfSlicedRightNumberPobi = slicedRightNumberPobi.reduce((acc, num) => acc + num)
  const productOfSlicedRightNumberPobi = slicedRightNumberPobi.reduce((acc, num) => acc * num)
  
  // 포비의 각 자리 숫자의 합과 곱 중에 큰 수를 구함
  const maxLeftNumberPobi = sumOfSlicedLeftNumberPobi > productOfSlicedLeftNumberPobi ? sumOfSlicedLeftNumberPobi : productOfSlicedLeftNumberPobi
  const maxRightNumberPobi = sumOfSlicedRightNumberPobi > productOfSlicedRightNumberPobi ? sumOfSlicedRightNumberPobi : productOfSlicedRightNumberPobi
  // console.log('maxLeftNumberPobi', maxLeftNumberPobi, 'maxRightNumberPobi', maxRightNumberPobi)


  // 크롱의 각 자리 숫자의 합과 곱을 구함
  const sumOfSlicedLeftNumberCrong = slicedLeftNumberCrong.reduce((acc, num) => acc + num)
  const productOfSlicedLeftNumberCrong = slicedLeftNumberCrong.reduce((acc, num) => acc * num)

  const sumOfSlicedRightNumberCrong = slicedRightNumberCrong.reduce((acc, num) => acc + num)
  const productOfSlicedRightNumberCrong = slicedRightNumberCrong.reduce((acc, num) => acc * num)

  // 크롱의 각 자리 숫자의 합과 곱 중에 큰 수를 구함
  const maxLeftNumberCrong = sumOfSlicedLeftNumberCrong > productOfSlicedLeftNumberCrong ? sumOfSlicedLeftNumberCrong : sumOfSlicedRightNumberCrong
  const maxRightNumberCrong = sumOfSlicedRightNumberCrong > productOfSlicedRightNumberCrong ? sumOfSlicedRightNumberCrong : productOfSlicedRightNumberCrong
  // console.log('maxLeftNumberCrong', maxLeftNumberCrong, 'maxRightNumberCrong', maxRightNumberCrong)

  
  // 포비와 크롱의 가장 큰 숫자(점수)를 구함
  const maxNumberPobi = maxLeftNumberPobi > maxRightNumberPobi ? maxLeftNumberPobi : maxRightNumberPobi;
  const maxNumberCrong = maxLeftNumberCrong > maxRightNumberCrong ? maxLeftNumberCrong : maxRightNumberCrong;
  // console.log('maxNumberPobi', maxNumberPobi, 'maxNumberCrong', maxNumberCrong)

  // 포비와 크롱의 점수를 비교함
  const answer = maxNumberPobi === maxNumberCrong ? 0 : (maxNumberPobi > maxNumberCrong ? 1 : 2)
  // console.log(answer)
  return answer;
}

module.exports = problem1;
