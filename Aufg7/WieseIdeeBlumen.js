var Aufg7_Wiese;
(function (Aufg7_Wiese) {
    class Flower {
        constructor(_x, _y) {
            this.radius = 10;
            this.winkel = 0;
            this.x = _x;
            this.y = _y;
        }
        drawDrops() {
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x - 3, this.y + 10, this.radius, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#e066ff";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x + 7, this.y + 9, this.radius, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#ff6347";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x + 10, this.y, this.radius, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#e066ff";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x + 3, this.y - 8, this.radius, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#ff6347";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x - 8, this.y - 8, this.radius, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#e066ff";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x - 12, this.y, this.radius, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#ff6347";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#FFFFFF";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
        }
        drawBonBon() {
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.fillStyle = " #c71585 ";
            Aufg7_Wiese.inhalt.strokeStyle = "#c71585";
            Aufg7_Wiese.inhalt.moveTo(this.x, this.y);
            Aufg7_Wiese.inhalt.lineTo(this.x + 15, this.y - 15);
            Aufg7_Wiese.inhalt.lineTo(this.x + 15, this.y + 15);
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.stroke();
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.fillStyle = " #c71585 ";
            Aufg7_Wiese.inhalt.strokeStyle = "#c71585";
            Aufg7_Wiese.inhalt.moveTo(this.x, this.y);
            Aufg7_Wiese.inhalt.lineTo(this.x - 15, this.y + 15);
            Aufg7_Wiese.inhalt.lineTo(this.x - 15, this.y - 15);
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.stroke();
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#ff69b4";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
        }
        drawLollipop() {
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x, this.y, this.radius + 20, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#8b0000";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x, this.y, this.radius + 15, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#FFFFFF";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x, this.y, this.radius + 10, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#8b0000";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x, this.y, this.radius + 5, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#FFFFFF";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
            Aufg7_Wiese.inhalt.moveTo(0, 0);
            Aufg7_Wiese.inhalt.beginPath();
            Aufg7_Wiese.inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            Aufg7_Wiese.inhalt.fillStyle = "#8b0000";
            Aufg7_Wiese.inhalt.fill();
            Aufg7_Wiese.inhalt.closePath();
        }
    }
    Aufg7_Wiese.Flower = Flower;
})(Aufg7_Wiese || (Aufg7_Wiese = {}));
//# sourceMappingURL=WieseIdeeBlumen.js.map