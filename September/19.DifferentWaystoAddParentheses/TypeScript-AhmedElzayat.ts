/**
 * Returns all possible results of evaluating an expression by inserting parentheses in all possible ways.
 * @param expression The expression to evaluate
 * @param prevs A map of expressions to their results
 * @returns An array of all possible results
 */
function diffWaysToCompute(expression: string, prevs: Map<string, number[]> = new Map()): number[] {
  // If the expression is a single number, return it
  if (expression.length <= 2) {
    return [parseInt(expression)];
  }

  // If we've already computed the results for this expression, return the cached results
  if (!prevs.has(expression)) {
    const results = [];

    // Iterate over each character in the expression
    for (let i = 0; i < expression.length; i++) {
      // If the character is an operator, split the expression into two parts
      if (["-", "+", "*"].includes(expression[i])) {
        const leftResults = diffWaysToCompute(expression.substring(0, i), prevs);
        const rightResults = diffWaysToCompute(expression.substring(i + 1), prevs);

        // For each result on the left and right, apply the operator
        for (const left of leftResults) {
          for (const right of rightResults) {
            if (expression[i] === "-") {
              results.push(left - right);
            } else if (expression[i] === "+") {
              results.push(left + right);
            } else {
              results.push(left * right);
            }
          }
        }
      }
    }

    // Cache the results for this expression
    prevs.set(expression, results);
  }

  // Return the cached results
  return prevs.get(expression) as number[];
}
