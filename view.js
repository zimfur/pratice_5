export class view {
    constructor(model) {
        this.model = model;

    }

    toHtml(){
        const strings = this.model.show();
        const html = strings.map(string => `<li>${string}</li>`).join('');
        return html;
    }

    updatePage() {
        const html = this.toHtml();
        document.getElementById('string_list').innerHTML = html;
      }
}

