const userInput = document.getElementById("calculator");
const button = document.querySelector("button");
const resultValue = document.getElementById("result");

button.addEventListener("click", () => {
    const input = userInput.value.trim();

    if (validateInput(input)) {
        try {
            const result = calculateInput(input);
            resultValue.textContent = `계산 결과: ${result}`;
        } catch (error) {
            resultValue.textContent = error.message;
        }
    } else {
        resultValue.textContent = "유효하지 않은 수식입니다. 숫자와 사칙연산 기호만 입력하세요.";
    }
});

function validateInput(input) {
    const regex = /^[\d+\-*/.\s]+$/;
    return regex.test(input);
}


function calculateInput(input) {
    if(!input){
        throw new TypeError("입력 값이 없습니다.");
    }

    const inputArray = input.split(' ');
    let res = parseFloat(inputArray[0]);

    for (let i = 1; i < inputArray.length; i += 2) {
        const operator = inputArray[i];
        const num = parseFloat(inputArray[i + 1]);

        if (isNaN(num)) {
            throw new TypeError("잘못된 수식입니다. 피연산자가 부족합니다.");
        }

        switch (operator) {
            case '+':
                res += num;
                break;
            case '-':
                res -= num;
                break;
            case '/':
                if (num === 0) {
                    throw new Error("0으로 나눌 수 없습니다.");
                }
                res /= num;
                break;
            case '*':
                res *= num;
                break;
            default:
                throw new RangeError("잘못된 연산자입니다.");
        }
    }

    return res;
}