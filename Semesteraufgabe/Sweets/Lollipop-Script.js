var Semesteraufgabe;
(function (Semesteraufgabe) {
    class LollipopSweet extends Semesteraufgabe.Sweet {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Lollipop");
        }
        draw() {
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x, this.y, this.radius + 20, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#8b0000";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x, this.y, this.radius + 15, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#FFFFFF";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x, this.y, this.radius + 10, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#8b0000";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x, this.y, this.radius + 5, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#FFFFFF";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
            Semesteraufgabe.inhalt.moveTo(0, 0);
            Semesteraufgabe.inhalt.beginPath();
            Semesteraufgabe.inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            Semesteraufgabe.inhalt.fillStyle = "#8b0000";
            Semesteraufgabe.inhalt.fill();
            Semesteraufgabe.inhalt.closePath();
        }
    }
    Semesteraufgabe.LollipopSweet = LollipopSweet;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=Lollipop-Script.js.map