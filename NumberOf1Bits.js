/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1);
        count++;
      }
      return count;
  };

  /*

  - Initialize a count variable to 0.
  - Loop through the bits of n.
  - For each bit, we check if it’s a 1.
  - If it is, we increment count by 1.
  - Return count.

  */