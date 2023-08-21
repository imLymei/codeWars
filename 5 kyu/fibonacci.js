function fibonacci(n) {
  let cache = [];

  function getFibonacci(n) {
    if (n < 2) return n;
    if (!cache[n]) {
      cache[n] = getFibonacci(n - 1) + getFibonacci(n - 2);
    }
    return cache[n];
  }

  return getFibonacci(n);
}

console.log(fibonacci(463));
