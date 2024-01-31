const getAllDivisors = (num) => {
  const divisors = [];
  const sqrt = Math.sqrt(num);
  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i !== num / i) {
        // Avoid duplicates for perfect squares
        divisors.push(num / i);
      }
    }
  }
  return divisors;
};

console.log(getAllDivisors(9));
