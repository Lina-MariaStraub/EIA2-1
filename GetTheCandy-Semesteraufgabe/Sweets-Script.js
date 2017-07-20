var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Sweet {
        constructor(_x, _y) {
            this.radius = 10;
            this.winkel = 0;
            this.x = _x;
            this.y = _y;
            this.width = 50;
            this.height = 52;
        }
        draw() {
            //abtrakt
        }
        // Teil der Boundingbox, hier wird die "Box" definiert, in die geklickt werden kann
        hit(x, y) {
            //verschieben von der hitbox ins zentrum
            let middleXAx = this.x - this.width / 2;
            let middleYAx = this.y - this.height / 2;
            let hit = false;
            if (x <= middleXAx + this.width && x >= middleXAx &&
                y <= middleYAx + this.height && y >= middleYAx) {
                hit = true;
            }
            return hit;
        }
    }
    Semesteraufgabe.Sweet = Sweet;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=Sweets-Script.js.map