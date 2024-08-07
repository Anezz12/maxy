function validateParentheses(str) {
  const stack = [];
  const pairs = {
    "<": ">",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (["<", "{", "["].includes(char)) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top === undefined || pairs[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
console.log(validateParentheses("[{}<>]")); // true
console.log(validateParentheses("]")); // false
