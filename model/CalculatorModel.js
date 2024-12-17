export class CalculatorModel {
  calculate(expression) {
    if (!expression || expression.trim() === "") {
      throw new TypeError("입력값이 null이거나 빈 공백입니다.");
    }

    const tokens = expression.split(" ").filter((token) => token !== "");

    if (tokens.length < 3) {
      throw new TypeError("올바른 수식이 아닙니다.");
    }

    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const number = parseFloat(tokens[i + 1]);

      if (isNaN(number)) {
        throw new TypeError("올바른 숫자가 아닙니다.");
      }

      result = this.executeOperation(result, operator, number);
    }

    return result;
  }

  executeOperation(left, operator, right) {
    switch (operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        if (right === 0) {
          throw new TypeError("0으로 나눌 수 없습니다.");
        }
        return left / right;
      default:
        throw new RangeError("올바른 연산자가 아닙니다.");
    }
  }
}
