class Crash extends HTMLElement {

    constructor(c:Car) {
        super();
        this.style.transform = c.style.transform;
        this.style.webkitFilter = c.style.webkitFilter;
        this.style.filter = c.style.filter;
    }

}

window.customElements.define("crash-component", Crash);