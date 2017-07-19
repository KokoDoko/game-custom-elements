class Car extends HTMLElement {
    constructor() {
        super();
        this.speed = 0;
        this.x = -158;
        this.y = Math.random() * window.innerHeight - 120;
        this.speed = Math.random() * 2 + 2;
        this.randomColor();
    }
    connectedCallback() {
    }
    disconnectedCallback() {
    }
    update() {
        this.x += this.speed;
        if (this.x > window.innerWidth) {
            this.remove();
        }
        let player = document.getElementById("player");
        if (Util.checkCollision(this, player)) {
            document.body.appendChild(new Crash(this));
            this.remove();
        }
        this.draw();
    }
    draw() {
        this.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    randomColor() {
        let color = Math.random() * 360;
        this.style.webkitFilter = "hue-rotate(" + color + "deg)";
        this.style.filter = "hue-rotate(" + color + "deg)";
    }
}
window.customElements.define("car-component", Car);
class Crash extends HTMLElement {
    constructor(c) {
        super();
        this.style.transform = c.style.transform;
        this.style.webkitFilter = c.style.webkitFilter;
        this.style.filter = c.style.filter;
    }
}
window.customElements.define("crash-component", Crash);
class Player extends HTMLElement {
    constructor() {
        super();
        this.id = "player";
        this.x = window.innerWidth / 2 - 50;
        this.y = window.innerHeight - 150;
        this.callback = (e) => this.onKeyDown(e);
        window.addEventListener("keydown", this.callback);
        this.draw();
    }
    connectedCallback() {
    }
    disconnectedCallback() {
        window.removeEventListener("keydown", this.callback);
    }
    onKeyDown(event) {
        switch (event.keyCode) {
            case Keys.LEFT:
                this.x -= 50;
                break;
            case Keys.RIGHT:
                this.x += 50;
                break;
            case Keys.UP:
                this.y -= 50;
                if (this.y + 50 < 0) {
                    this.y = window.innerHeight - 102;
                }
                break;
            case Keys.DOWN:
                this.y += 50;
                break;
        }
        this.draw();
    }
    draw() {
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}
window.customElements.define("player-component", Player);
class Game {
    constructor() {
        this.counter = 0;
        document.body.appendChild(new Player());
        requestAnimationFrame(() => this.gameLoop());
    }
    gameLoop() {
        this.counter++;
        if (this.counter % 60 == 0) {
            document.body.appendChild(new Car());
        }
        let cars = document.getElementsByTagName("car-component");
        for (let c of cars) {
            c.update();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
}
var Keys;
(function (Keys) {
    Keys[Keys["UP"] = 87] = "UP";
    Keys[Keys["DOWN"] = 83] = "DOWN";
    Keys[Keys["LEFT"] = 65] = "LEFT";
    Keys[Keys["RIGHT"] = 68] = "RIGHT";
})(Keys || (Keys = {}));
window.addEventListener("load", function () {
    NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    new Game();
});
class Util {
    static checkCollision(c, p) {
        let car = c.getBoundingClientRect();
        let player = p.getBoundingClientRect();
        return (car.left < player.right &&
            car.right > player.left &&
            car.top < player.bottom &&
            car.bottom > player.top);
    }
}
//# sourceMappingURL=main.js.map