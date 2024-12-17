export class CalculatorController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    while (true) {
      const input = await this.view.getInput();

      if (input.toLowerCase() === "q") {
        console.log("계산기를 종료합니다.");
        this.view.close();
        break;
      }

      try {
        const result = this.model.calculate(input);
        this.view.showResult(result);
      } catch (error) {
        this.view.showError(error);
      }
    }
  }
}
