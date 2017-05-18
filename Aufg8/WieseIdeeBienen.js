var Aufg8_Wiese;
(function (Aufg8_Wiese) {
    class Bee {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.fly();
            this.drawBiene();
        }
        fly() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
            this.x--;
        }
        setRandomStyle() {
            this.scale = Math.random() * 5 + 2;
            this.farbe = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        fullOutAndIn() {
            if (this.x < 0) {
                this.x = 1500;
            }
            if (this.y < 0) {
                this.y = 710;
            }
            if (this.y > 710) {
                this.y = 0;
            }
        }
        drawBiene() {
            //abtrakt
        }
    }
    Aufg8_Wiese.Bee = Bee;
})(Aufg8_Wiese || (Aufg8_Wiese = {}));
//# sourceMappingURL=WieseIdeeBienen.js.map