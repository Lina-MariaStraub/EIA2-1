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
            Semesteraufgabe.inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "white";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x + 10, this.y + 12, this.radius, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "yellow";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
        }
    }
    Semesteraufgabe.DropsSweet = DropsSweet; //ende der Klasse Bee
})(Semesteraufgabe || (Semesteraufgabe = {})); //ende des Namespace
//# sourceMappingURL=Drops-Script.js.map