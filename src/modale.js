export default class Modale {
    modaleElement

    constructor(modaleElement, openButton = null, closeButton = null) {
        this.modaleElement = modaleElement;
        if (openButton) {
            openButton.addEventListener("click", !closeButton ? this.toggle.bind(this) : this.open.bind(this));
        }
        if (closeButton) {
            closeButton.addEventListener("click", this.close.bind(this));
        }
    }

    open() {
        this.modaleElement.setAttribute("data-modale", "active");
    }
    close() {
        this.modaleElement.removeAttribute("data-modale");
    }
    toggle() {
        this.modaleElement.hasAttribute("data-modale") ? this.close() : this.open()
    }
}