var Aufg8_Wiese;
(function (Aufg8_Wiese) {
    class BonBonFlower extends Aufg8_Wiese.Flower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Honigbiene");
        }
        draw() {
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = " #c71585 ";
            Aufg8_Wiese.inhalt.strokeStyle = "#c71585";
            Aufg8_Wiese.inhalt.moveTo(this.x, this.y);
            Aufg8_Wiese.inhalt.lineTo(this.x + 15, this.y - 15);
            Aufg8_Wiese.inhalt.lineTo(this.x + 15, this.y + 15);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = " #c71585 ";
            Aufg8_Wiese.inhalt.strokeStyle = "#c71585";
            Aufg8_Wiese.inhalt.moveTo(this.x, this.y);
            Aufg8_Wiese.inhalt.lineTo(this.x - 15, this.y + 15);
            Aufg8_Wiese.inhalt.lineTo(this.x - 15, this.y - 15);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
            Aufg8_Wiese.inhalt.moveTo(0, 0);
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            Aufg8_Wiese.inhalt.fillStyle = "#ff69b4";
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.closePath();
        }
    }
    Aufg8_Wiese.BonBonFlower = BonBonFlower;
})(Aufg8_Wiese || (Aufg8_Wiese = {}));
//# sourceMappingURL=BonBonFlower.js.map