var Semesteraufgabe;
(function (Semesteraufgabe) {
    class BonBonSweet extends Semesteraufgabe.Sweet {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create BonBon");
        }
        draw() {
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.fillStyle = " #c71585 ";
            Semesteraufgabe.inhalt.strokeStyle = "#c71585";
            Semesteraufgabe.inhalt.moveTo(this.x, this.y);
            Semesteraufgabe.inhalt.lineTo(this.x + 15, this.y - 15);
            Semesteraufgabe.inhalt.lineTo(this.x + 15, this.y + 15);
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.stroke();
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.fillStyle = " #c71585 ";
            Semesteraufgabe.inhalt.strokeStyle = "#c71585";
            Semesteraufgabe.inhalt.moveTo(this.x, this.y);
            Semesteraufgabe.inhalt.lineTo(this.x - 15, this.y + 15);
            Semesteraufgabe.inhalt.lineTo(this.x - 15, this.y - 15);
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.stroke();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x, this.y, this.radius - 3, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#ff69b4";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
        }
    }
    Semesteraufgabe.BonBonSweet = BonBonSweet;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=BonBon-Script.js.map