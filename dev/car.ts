class Car extends HTMLElement {

    private speed: number = 0;
    private x: number;
    private y: number;

    constructor() {
        super();

        this.x = -158;
        this.y = Math.random() * window.innerHeight - 120;
        this.speed = Math.random() * 2 + 2;
        this.randomColor();
    }

    public connectedCallback() : void {
    }

    public disconnectedCallback():void{
    }

    public update(): void {
        this.x += this.speed;

        if (this.x > window.innerWidth) {
            this.remove();
        }
        
        let player:Player = document.getElementById("player") as Player;
        if(Util.checkCollision(this, player)){
            document.body.appendChild(new Crash(this));
            this.remove();
        }

        this.draw();
    }

    public draw():void {
        this.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    private randomColor() {
        let color:number = Math.random()*360; 
        this.style.webkitFilter = "hue-rotate("+color+"deg)";
        this.style.filter = "hue-rotate("+color+"deg)";
    }

}

window.customElements.define("car-component", Car);