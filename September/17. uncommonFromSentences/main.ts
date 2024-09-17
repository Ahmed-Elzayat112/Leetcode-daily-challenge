function uncommonFromSentences(s1: string, s2: string): string[] {
  const mp = new Map<string, number>();
  let temp = "";
  for (let i = 0; i < s1.length; i++) {
    temp += s1[i];
    if (i === s1.length - 1 || s1[i + 1] === " ") {
      mp.set(temp, (mp.get(temp) || 0) + 1);
      temp = "";
      i++;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    temp += s2[i];
    if (i === s2.length - 1 || s2[i + 1] === " ") {
      mp.set(temp, (mp.get(temp) || 0) + 1);
      temp = "";
      i++;
    }
  }

  const result: string[] = [];
  mp.forEach((value, key) => {
    if (value === 1) {
      result.push(key);
    }
  });
  return result;
}

console.log(uncommonFromSentences("apple apple", "banana"));
