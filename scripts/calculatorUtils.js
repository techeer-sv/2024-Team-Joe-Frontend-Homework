export const getCalculationResult = (input) => {
    if (!input) {
        throw new TypeError("입력 값이 없습니다.");
    }

    const inputArray = input.split(' ');
    return calculateInput(inputArray);
};

const calculateInput = (inputArray) => {
    let res = parseFloat(inputArray[0]);

    for (let i = 1; i < inputArray.length; i += 2) {
        const operator = inputArray[i];
        const num = parseFloat(inputArray[i + 1]);

        if (isNaN(num)) {
            throw new TypeError("잘못된 수식입니다. 피연산자가 부족합니다.");
        }

        res = executeOperation(res, operator, num);
    }

    return res;
};

const executeOperation = (res, operator, num) => {
    switch (operator) {
        case '+':
            return res + num;
        case '-':
            return res - num;
        case '/':
            if (num === 0) {
                throw new Error("0으로 나눌 수 없습니다.");
            }
            return res / num;
        case '*':
            return res * num;
        default:
            throw new RangeError("잘못된 연산자입니다.");
    }
};
