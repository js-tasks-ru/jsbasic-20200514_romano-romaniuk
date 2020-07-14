/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n == 1 || n == 0) return 1;
  //
  let result = n;
  let k = n - 1;   // k - коэфициент умножения
  //
  for (let i = 0 ; i < n - 1; i++){
      result *=  k; 
      k-- ;
    }
  return result
}
