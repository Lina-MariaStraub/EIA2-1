var Aufg8_Wiese;
(function (Aufg8_Wiese) {
    class LollipopFlower extends Aufg8_Wiese.Flower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Honigbiene");
        }
        draw() {
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x, this.y, this.radius + 20, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#8b0000";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x, this.y, this.radius + 15, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#FFFFFF";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x, this.y, this.radius + 10, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#8b0000";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x, this.y, this.radius + 5, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#FFFFFF";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#8b0000";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
        }
    }
    Aufg8_Wiese.LollipopFlower = LollipopFlower;
})(Aufg8_Wiese || (Aufg8_Wiese = {}));
//# sourceMappingURL=LollipopFlower.js.map