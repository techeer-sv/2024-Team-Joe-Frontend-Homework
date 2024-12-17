import * as readline from "readline";

export class CalculatorView {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async getInput() {
    return new Promise((resolve) => {
      this.rl.question("계산식을 입력하세요 (종료는 q): ", (input) => {
        resolve(input);
      });
    });
  }

  showResult(result) {
    console.log(`계산 결과: ${result}\n`);
  }

  showError(error) {
    console.error(`에러: ${error.message}\n`);
  }

  close() {
    this.rl.close();
  }
}
