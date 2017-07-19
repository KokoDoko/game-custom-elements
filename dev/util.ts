class Util {
    /**
     * deze formule rekent uit of twee dom elementen elkaar overlappen
     */
    public static checkCollision(c:HTMLElement, p:HTMLElement):boolean {
        let car:ClientRect = c.getBoundingClientRect();
        let player:ClientRect = p.getBoundingClientRect();
        return (car.left < player.right &&
                car.right > player.left &&
                car.top < player.bottom &&
                car.bottom > player.top)
    }
}