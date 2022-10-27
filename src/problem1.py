# 각 자리 수 더하는 함수
def sum0(n):
  sum_res=0
  while n>0 :
      sum_res+=n%10
      n//=10
  return sum_res

# 각 자리 수 곱하는 함수
def mult0(n):
  mult_res=1
  while n>0 :
      mult_res= mult_res*(n%10)
      n//=10
  return mult_res


