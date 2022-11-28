// A boolean expression is an expression that evaluates to either true or false. It can be in one of the following shapes:

// 't' that evaluates to true.
// 'f' that evaluates to false.
// '!(subExpr)' that evaluates to the logical NOT of the inner expression subExpr.
// '&(subExpr1, subExpr2, ..., subExprn)' that evaluates to the logical AND of the inner expressions subExpr1, subExpr2, ..., subExprn where n >= 1.
// '|(subExpr1, subExpr2, ..., subExprn)' that evaluates to the logical OR of the inner expressions subExpr1, subExpr2, ..., subExprn where n >= 1.
// Given a string expression that represents a boolean expression, return the evaluation of that expression.

// It is guaranteed that the given expression is valid and follows the given rules.

// Example 1:

// Input: expression = "&(|(f))"
// Output: false
// Explanation:
// First, evaluate |(f) --> f. The expression is now "&(f)".
// Then, evaluate &(f) --> f. The expression is now "f".
// Finally, return false.
// Example 2:

// Input: expression = "|(f,f,f,t)"
// Output: true
// Explanation: The evaluation of (false OR false OR false OR true) is true.
// Example 3:

// Input: expression = "!(&(f,t))"
// Output: true
// Explanation:
// First, evaluate &(f,t) --> (false AND true) --> false --> f. The expression is now "!(f)".
// Then, evaluate !(f) --> NOT false --> true. We return true.

// Constraints:

// 1 <= expression.length <= 2 * 104
// expression[i] is one following characters: '(', ')', '&', '|', '!', 't', 'f', and ','.

/**
 * @param {string} expression
 * @return {boolean}
 */
const parseBoolExpr = function (expression) {
  let stack = [];
  for (let i = 0, len = expression.length; i < len; i += 1) {
    const char = expression[i];
    if (char === ')') {
      let t = 0;
      let f = 0;
      while (stack[stack.length - 1] !== '(') {
        if (stack.pop() === 'f') {
          f += 1;
        } else {
          t += 1;
        }
      }
      stack.pop();
      const op = stack.pop();
      switch (op) {
        case '!':
          stack.push(f == 1 ? 't' : 'f');
          break;
        case '&':
          stack.push(f == 0 ? 't' : 'f');
          break;
        case '|':
          stack.push(t > 0 ? 't' : 'f');
          break;
        default:
      }
    } else if (char !== ',') {
      stack.push(char);
    }
  }
  return stack.pop() === 't';
};
