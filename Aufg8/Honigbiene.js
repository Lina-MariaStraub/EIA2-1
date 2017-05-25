var Aufg8_Wiese;
(function (Aufg8_Wiese) {
    class Honigbiene extends Aufg8_Wiese.Bee {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.04;
            this.setStartPosition();
            this.setTargetPosition();
            console.log("Create Honigbiene");
        }
        update() {
            this.fly();
            super.drawBiene();
        }
        draw() {
            //abstrakt
        }
        setStartPosition() {
            this.x = 1250;
            this.y = 420;
        }
        setTargetPosition() {
            let i = Math.floor(Math.random() * (Aufg8_Wiese.flowers.length - 1));
            this.xTarget = Aufg8_Wiese.flowers[i].x + 5;
            this.yTarget = Aufg8_Wiese.flowers[i].y - 20;
        }
        fly() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
    }
    Aufg8_Wiese.Honigbiene = Honigbiene; //ende der Klasse Bee
})(Aufg8_Wiese || (Aufg8_Wiese = {})); //ende des Namespace
//# sourceMappingURL=Honigbiene.js.map