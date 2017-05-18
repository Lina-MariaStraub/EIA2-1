var Aufg8_Wiese;
(function (Aufg8_Wiese) {
    class NormaleBiene extends Aufg8_Wiese.Bee {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Honigbiene");
        }
        draw() {
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = "black";
            Aufg8_Wiese.inhalt.strokeStyle = "black";
            Aufg8_Wiese.inhalt.moveTo(this.x + 2, this.y - 12);
            Aufg8_Wiese.inhalt.arc(this.x + 2, this.y - 12, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.moveTo(this.x + 9, this.y - 12);
            Aufg8_Wiese.inhalt.arc(this.x + 9, this.y - 12, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = this.farbe;
            Aufg8_Wiese.inhalt.strokeStyle = this.farbe;
            Aufg8_Wiese.inhalt.moveTo(this.x + 9, this.y);
            Aufg8_Wiese.inhalt.arc(this.x + 9, this.y, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = "black";
            Aufg8_Wiese.inhalt.strokeStyle = "black";
            Aufg8_Wiese.inhalt.moveTo(this.x + 4, this.y);
            Aufg8_Wiese.inhalt.arc(this.x + 4, this.y, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = this.farbe;
            Aufg8_Wiese.inhalt.strokeStyle = this.farbe;
            Aufg8_Wiese.inhalt.moveTo(this.x, this.y);
            Aufg8_Wiese.inhalt.arc(this.x, this.y, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
            Aufg8_Wiese.inhalt.beginPath();
            Aufg8_Wiese.inhalt.fillStyle = "black";
            Aufg8_Wiese.inhalt.strokeStyle = "black";
            Aufg8_Wiese.inhalt.moveTo(this.x - 5, this.y - 2);
            Aufg8_Wiese.inhalt.arc(this.x - 5, this.y - 2, this.scale, 180, 270);
            Aufg8_Wiese.inhalt.closePath();
            Aufg8_Wiese.inhalt.fill();
            Aufg8_Wiese.inhalt.stroke();
        }
    }
    Aufg8_Wiese.NormaleBiene = NormaleBiene; //ende der Klasse Bee
})(Aufg8_Wiese || (Aufg8_Wiese = {})); //ende des Namespace
//# sourceMappingURL=NormaleBiene.js.map