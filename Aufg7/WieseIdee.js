var Aufg7_Wiese;
(function (Aufg7_Wiese) {
    window.addEventListener("load", init);
    let bees = [];
    let blumis = [];
    let menge = 10;
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufg7_Wiese.inhalt = canvas.getContext("2d");
        //let bee = new Bee(100, 100);
        zeichneHimmel();
        zeichneBerg(1100, 510, "grey");
        zeichneBerg(900, 510, "darkgrey");
        zeichneBerg(1000, 650, "lightgrey");
        zeichneBerg(680, 650, "lightgrey");
        wolkenZusammen(1000, 640, 15, 0);
        machsGruen();
        sonnenStrahlen(25, 190);
        sonnenStrahlen(75, 250);
        sonnenStrahlen(90, 190);
        sonnenStrahlen(175, 250);
        sonnenStrahlen(225, 190);
        sonnenStrahlen(240, 250);
        sonnenStrahlen(300, 190);
        sonnenStrahlen(390, 190);
        sonnenStrahlen(225, 70);
        sonnenStrahlen(190, 15);
        sonnenStrahlen(280, 50);
        zeichneSonne();
        zuckerwatte(420, 75, 25, 0);
        zuckerwatte(455, 85, 25, 0);
        zuckerwatte(455, 65, 25, 0);
        zuckerwatte(475, 75, 25, 0);
        zuckerwatte(700, 100, 35, 0);
        zuckerwatte(740, 80, 35, 0);
        zuckerwatte(750, 110, 35, 0);
        zuckerwatte(770, 90, 25, 0);
        baumstamm(1200, 360, 50, 150);
        baumKrone(1170, 340, 35, 0);
        baumstamm(1300, 360, 50, 150);
        baumKrone(1270, 340, 35, 0);
        zeichneKorb(1250, 420, 7);
        imgData = Aufg7_Wiese.inhalt.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < menge; i++) {
            neueBiene();
        }
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);
    }
    function neueBiene() {
        let b = new Aufg7_Wiese.Bee(1250, 420);
        b.setRandomStyle();
        bees.push(b);
    }
    function animate() {
        Aufg7_Wiese.inhalt.putImageData(imgData, 0, 0);
        for (let i = 0; i < bees.length; i++) {
            console.log(bees);
            let b = bees[i];
            b.update();
            b.fullOutAndIn();
        }
        window.setTimeout(animate, 20);
    }
    function zeichneKorb(_x, _y, _radius) {
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.rect(_x, _y, 25, 25);
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.fillStyle = " brown ";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 12, _y - 3, _radius, 0, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "brown";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 2, _y + 4, _radius, 0, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "brown";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x - 2, _y + 15, _radius, 0, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "brown";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 1, _y + 24, _radius, 0, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "brown";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 12, _y + 30, _radius, 0, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "brown";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 18, _y + 30, _radius, 0, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "brown";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 27, _y + 24, _radius, 0, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "brown";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 27, _y + 15, _radius, 0, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "brown";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 24, _y + 4, _radius, 0, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "brown";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 18, _y + 15, _radius, 0, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "brown";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
    }
    function zeichneBerg(_x, _y, _farbe) {
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.fillStyle = _farbe;
        Aufg7_Wiese.inhalt.strokeStyle = _farbe;
        Aufg7_Wiese.inhalt.moveTo(_x, _y);
        Aufg7_Wiese.inhalt.lineTo(_x + 200, _y - 350);
        Aufg7_Wiese.inhalt.lineTo(_x + 400, _y);
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.stroke();
    }
    function zeichneHimmel() {
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.rect(0, 0, Aufg7_Wiese.inhalt.canvas.width, Aufg7_Wiese.inhalt.canvas.height);
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.fillStyle = "#C4E4F5";
        Aufg7_Wiese.inhalt.fill();
    }
    function zeichneSonne() {
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(0, 0, 150, 0, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#ffff00";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.strokeStyle = "#C4E4F5";
        Aufg7_Wiese.inhalt.lineWidth = 10;
        Aufg7_Wiese.inhalt.stroke();
        Aufg7_Wiese.inhalt.closePath();
    }
    function sonnenStrahlen(_x, _y) {
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.lineTo(_x, _y);
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.strokeStyle = "#ffff00";
        Aufg7_Wiese.inhalt.lineWidth = 5;
        Aufg7_Wiese.inhalt.stroke();
    }
    function machsGruen() {
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.rect(0, 510, Aufg7_Wiese.inhalt.canvas.width, 200);
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.fillStyle = "    #7cfc00";
        Aufg7_Wiese.inhalt.fill();
    }
    function zuckerwatte(_x, _y, _radius, _winkel) {
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#FFFFFF";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
    }
    function wolkenZusammen(_x, _y, _radius, _winkel) {
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#FFFFFF";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 15, _y + 10, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#FFFFFF";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 20, _y + 10, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#FFFFFF";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
    }
    function baumstamm(_x, _y, _width, _height) {
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.rect(_x, _y, _width, _height);
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.fillStyle = " #ffa54f ";
        Aufg7_Wiese.inhalt.fill();
    }
    function baumKrone(_x, _y, _radius, _winkel) {
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#008b00";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 20, _y - 20, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#008b00";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 20, _y + 20, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#008b00";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 30, _y + 35, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#008b00";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 30, _y - 30, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#008b00";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 50, _y - 50, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#008b00";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 80, _y - 30, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#008b00";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 45, _y, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#008b00";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 90, _y, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#008b00";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
        Aufg7_Wiese.inhalt.moveTo(0, 0);
        Aufg7_Wiese.inhalt.beginPath();
        Aufg7_Wiese.inhalt.arc(_x + 80, _y + 30, _radius, _winkel, 2 * Math.PI);
        Aufg7_Wiese.inhalt.fillStyle = "#008b00";
        Aufg7_Wiese.inhalt.fill();
        Aufg7_Wiese.inhalt.closePath();
    }
})(Aufg7_Wiese || (Aufg7_Wiese = {}));
//# sourceMappingURL=WieseIdee.js.map