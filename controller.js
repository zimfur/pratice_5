import { model } from "./model.js";
import { view } from "./view.js";
  
export class Controller {
    constructor() {
        this.model = new model();
        this.view = new view(this.model);
        this.bindActions();
    }

    add() {
        this.model.add();
        this.view.updatePage();
    }

    delete() {
        this.model.delete();
        this.view.updatePage();
    }



    updatePage() {
        this.view.updatePage();
    }

    bindActions() {

        document.getElementById('add_string').addEventListener('click', () => this.add());

        document.getElementById('delete_string').addEventListener('click', () => this.delete());

    }
}
const controller = new Controller();
