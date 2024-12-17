import { isValidInput } from './inputValidator.js';
import { getCalculationResult } from './calculatorUtils.js';

const userInput = document.getElementById("calculator");
const button = document.querySelector("button");
const resultValue = document.getElementById("result");

button.addEventListener("click", () => {
    const input = userInput.value.trim();

    if (isValidInput(input)) {
        try {
            const result = getCalculationResult(input);
            resultValue.textContent = `계산 결과: ${result}`;
        } catch (error) {
            resultValue.textContent = error.message;
        }
    } else {
        resultValue.textContent = "유효하지 않은 수식입니다. 숫자와 사칙연산 기호만 입력하세요.";
    }
});
