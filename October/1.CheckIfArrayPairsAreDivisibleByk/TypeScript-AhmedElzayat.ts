function canArrange(arr: number[], k: number): boolean {
  // Use a map to count the occurrences of the remainder of each number
  // divided by k
  const hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    // Make sure the remainder is positive
    let num = arr[i] % k;
    if (num < 0) num += k;
    hash.set(num, (hash.get(num) || 0) + 1);
  }

  // If the remainder is 0, it must appear an even number of times
  if ((hash.get(0) || 0) % 2 !== 0) return false;

  // For each remainder i, it must appear the same number of times
  // as the remainder k-i
  for (let i = 1; i <= k / 2; i++) {
    if (hash.get(i) !== hash.get(k - i)) {
      return false;
    }
  }
  return true;
}

console.log(canArrange([1, 2, 3, 4, 5, 6], 7));
