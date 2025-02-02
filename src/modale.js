export default class Modale {
    modaleElement

    constructor(modaleElement, openButton, closeButton) {
        this.modaleElement = modaleElement;
        openButton.addEventListener("click", this.open.bind(this));
        closeButton.addEventListener("click", this.close.bind(this));
    }

    open() {
        this.modaleElement.setAttribute("data-modale", "active");
    }
    close() {
        this.modaleElement.removeAttribute("data-modale");
    }
}