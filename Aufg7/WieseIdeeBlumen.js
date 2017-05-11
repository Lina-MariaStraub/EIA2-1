var Aufg7_Wiese;
(function (Aufg7_Wiese) {
    class Blumen {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        placeRandomFlower() {
            let numberSweets = Math.floor((Math.random() * 30) + 5);
            for (let i = 0; i < numberSweets; i++) {
                this.x = Math.round((Math.random() * Aufg7_Wiese.inhalt.canvas.width) - 30);
                this.y = Math.round((Math.random() * 200) + 520);
                this.p = Math.round((Math.random() * 3) + 0);
                switch (this.p) {
                    case 0:
                        this.drawDropsBlume();
                        break;
                    case 1:
                        this.drawBonBon();
                        break;
                    case 2:
                        this.drawlollipop();
                        break;
                    default:
                        break;
                }
            }
        }
        drawDropsBlume() {
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
        drawlollipop() {
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
    Aufg7_Wiese.Blumen = Blumen;
})(Aufg7_Wiese || (Aufg7_Wiese = {}));
//# sourceMappingURL=WieseIdeeBlumen.js.map