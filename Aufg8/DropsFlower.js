var Aufg8_Wiese;
(function (Aufg8_Wiese) {
    class DropsFlower extends Aufg8_Wiese.Flower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Honigbiene");
        }
        draw() {
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x - 3, this.y + 10, this.radius, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#e066ff";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x + 7, this.y + 9, this.radius, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#ff6347";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x + 10, this.y, this.radius, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#e066ff";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x + 3, this.y - 8, this.radius, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#ff6347";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x - 8, this.y - 8, this.radius, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#e066ff";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x - 12, this.y, this.radius, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#ff6347";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#FFFFFF";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
        }
    }
    Aufg8_Wiese.DropsFlower = DropsFlower; //ende der Klasse Bee
})(Aufg8_Wiese || (Aufg8_Wiese = {})); //ende des Namespace
//# sourceMappingURL=DropsFlower.js.map