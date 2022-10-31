### 기능 구현 사항

1. 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구하는 함수(biggestValue)를 작성하였다.
2. 함수 biggestValue는 우선 왼쪽페이지와 오른쪽페이지의 숫자가 연속된 숫자가 아니면 answer에 -1을 대입한다.
3. leftPage, rightPage 라는 배열을 생성하고 각 자리 숫자를 split()를 이용해 잘라 담았다.
4. leftMul, rightMul과 leftSum, rightSum을 만들고 여기에 각 자리 숫자를 곱한 값과 더한 값을 담았다.
5. 각 자리 숫자를 곱한 값과 더한 값 중 더 큰 값을 각 leftPage, rightPage 변수에 담고 leftPage와 rightPage 중 큰 값이 biggestValue의 리턴값이 된다.
6. pobi의 biggestValue는 pobiNum에 대입하고, crong의 biggestValue는 crongNum에 대입한다.
7. pobiNum과 crongNum을 비교하여 pobiNum이 크면 1을, crongNum이 크면 2를, 두 값이 같으면 0을 answer에 대입한다.
8. answer 값을 리턴한다.
