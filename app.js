import { CalculatorModel } from "./model/CalculatorModel.js";
import { CalculatorView } from "./view/CalculatorView.js";
import { CalculatorController } from "./controller/CalculatorController.js";

const model = new CalculatorModel();
const view = new CalculatorView();
const controller = new CalculatorController(model, view);

controller.run();
