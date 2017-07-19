/// <reference path="car.ts"/>
/// <reference path="player.ts"/>

class Game {
    
    private counter:number = 0;
     
    constructor() {
        document.body.appendChild(new Player());
        requestAnimationFrame(() => this.gameLoop());
    }
    
    private gameLoop(){
        this.counter++;
        if(this.counter%60 == 0) {
            document.body.appendChild(new Car());
        }

        let cars : NodeListOf<Car> = document.getElementsByTagName("car-component") as NodeListOf<Car>;

        for(let c of cars){
            c.update();
        } 

        requestAnimationFrame(() => this.gameLoop());
    }
}