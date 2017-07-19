class Player extends HTMLElement {
 
    private x:number;
    private y:number;
    private callback:EventListener;

    constructor() {
        super();

        this.id = "player";

        this.x = window.innerWidth/2 - 50;
        this.y = window.innerHeight - 150;

        this.callback = (e:KeyboardEvent) => this.onKeyDown(e);
        window.addEventListener("keydown", this.callback);

        this.draw();
    }

    public connectedCallback() : void {
    }

    public disconnectedCallback():void{
        window.removeEventListener("keydown", this.callback);
    }

    // W A S D
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case Keys.LEFT:
            this.x -= 50;
            break;
        case Keys.RIGHT:
            this.x += 50;
            break;
        case Keys.UP:
            this.y -= 50;
            if(this.y + 50 < 0){  
                this.y = window.innerHeight - 102;
            }
            break;
        case Keys.DOWN:
            this.y += 50;
            break;
        }
        this.draw();
    }

    public draw():void {
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }

}

window.customElements.define("player-component", Player);