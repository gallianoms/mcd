const mcd = (num1: number, num2: number) => {
  if (num2 === 0) return num1

  return mcd(num2, num1 % num2)
}

console.log(mcd(9, 6))
