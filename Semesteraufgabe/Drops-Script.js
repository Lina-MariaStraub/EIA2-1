var Semesteraufgabe;
(function (Semesteraufgabe) {
    class DropsSweet extends Semesteraufgabe.Sweet {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Drops");
        }
        draw() {
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x - 3, this.y + 10, this.radius, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#e066ff";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x + 7, this.y + 9, this.radius, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#ff6347";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x + 10, this.y, this.radius, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#e066ff";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x + 3, this.y - 8, this.radius, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#ff6347";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x - 8, this.y - 8, this.radius, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#e066ff";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x - 12, this.y, this.radius, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#ff6347";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#FFFFFF";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
        }
    }
    Semesteraufgabe.DropsSweet = DropsSweet; //ende der Klasse Bee
})(Semesteraufgabe || (Semesteraufgabe = {})); //ende des Namespace
//# sourceMappingURL=Drops-Script.js.map