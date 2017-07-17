var Semesteraufgabe;
(function (Semesteraufgabe) {
    window.addEventListener("load", init);
    let bees = [];
    Semesteraufgabe.sweets = [];
    let menge = 10;
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Semesteraufgabe.context = canvas.getContext("2d");
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
        placeRandomFlowers();
        imgData = Semesteraufgabe.context.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < menge; i++) {
            neueBiene();
        }
        for (let i = 0; i < 5; i++) {
            var hb = new Semesteraufgabe.Honigbiene(1250, 420);
            bees.push(hb);
        }
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);
    }
    function placeRandomFlowers() {
        let numberSweets = Math.floor((Math.random() * 40) + 5);
        for (let i = 0; i < numberSweets; i++) {
            let x = Math.round((Math.random() * Semesteraufgabe.context.canvas.width) - 30);
            let y = Math.round((Math.random() * 200) + 520);
            let p = Math.round((Math.random() * 3) + 0);
            switch (p) {
                case 0:
                    let drop = new Semesteraufgabe.DropsFlower(x, y);
                    drop.draw();
                    Semesteraufgabe.sweets.push(drop);
                    break;
                case 1:
                    let bonBon = new Semesteraufgabe.BonBonFlower(x, y);
                    bonBon.draw();
                    Semesteraufgabe.sweets.push(bonBon);
                    break;
                case 2:
                    let lollipop = new Semesteraufgabe.LollipopFlower(x, y);
                    lollipop.draw();
                    Semesteraufgabe.sweets.push(lollipop);
                    break;
                default:
                    break;
            }
        }
    }
    function neueBiene() {
        let b = new Semesteraufgabe.Bee(1250, 420);
        b.setRandomStyle();
        bees.push(b);
    }
    function animate() {
        Semesteraufgabe.context.putImageData(imgData, 0, 0);
        for (let i = 0; i < bees.length; i++) {
            let b = bees[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
    function zeichneKorb(_x, _y, _radius) {
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.rect(_x, _y, 25, 25);
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.fillStyle = " brown ";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 12, _y - 3, _radius, 0, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "brown";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 2, _y + 4, _radius, 0, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "brown";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x - 2, _y + 15, _radius, 0, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "brown";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 1, _y + 24, _radius, 0, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "brown";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 12, _y + 30, _radius, 0, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "brown";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 18, _y + 30, _radius, 0, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "brown";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 27, _y + 24, _radius, 0, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "brown";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 27, _y + 15, _radius, 0, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "brown";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 24, _y + 4, _radius, 0, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "brown";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 18, _y + 15, _radius, 0, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "brown";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
    }
    function zeichneBerg(_x, _y, _farbe) {
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.fillStyle = _farbe;
        Semesteraufgabe.context.strokeStyle = _farbe;
        Semesteraufgabe.context.moveTo(_x, _y);
        Semesteraufgabe.context.lineTo(_x + 200, _y - 350);
        Semesteraufgabe.context.lineTo(_x + 400, _y);
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.stroke();
    }
    function zeichneHimmel() {
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.rect(0, 0, Semesteraufgabe.context.canvas.width, Semesteraufgabe.context.canvas.height);
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.fillStyle = "#C4E4F5";
        Semesteraufgabe.context.fill();
    }
    function zeichneSonne() {
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(0, 0, 150, 0, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#ffff00";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.strokeStyle = "#C4E4F5";
        Semesteraufgabe.context.lineWidth = 10;
        Semesteraufgabe.context.stroke();
        Semesteraufgabe.context.closePath();
    }
    function sonnenStrahlen(_x, _y) {
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.lineTo(_x, _y);
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.strokeStyle = "#ffff00";
        Semesteraufgabe.context.lineWidth = 5;
        Semesteraufgabe.context.stroke();
    }
    function machsGruen() {
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.rect(0, 510, Semesteraufgabe.context.canvas.width, 200);
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.fillStyle = "    #7cfc00";
        Semesteraufgabe.context.fill();
    }
    function zuckerwatte(_x, _y, _radius, _winkel) {
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#FFFFFF";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
    }
    function wolkenZusammen(_x, _y, _radius, _winkel) {
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#FFFFFF";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 15, _y + 10, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#FFFFFF";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 20, _y + 10, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#FFFFFF";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
    }
    function baumstamm(_x, _y, _width, _height) {
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.rect(_x, _y, _width, _height);
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.fillStyle = " #ffa54f ";
        Semesteraufgabe.context.fill();
    }
    function baumKrone(_x, _y, _radius, _winkel) {
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#008b00";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 20, _y - 20, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#008b00";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 20, _y + 20, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#008b00";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 30, _y + 35, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#008b00";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 30, _y - 30, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#008b00";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 50, _y - 50, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#008b00";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 80, _y - 30, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#008b00";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 45, _y, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#008b00";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 90, _y, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#008b00";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
        Semesteraufgabe.context.moveTo(0, 0);
        Semesteraufgabe.context.beginPath();
        Semesteraufgabe.context.arc(_x + 80, _y + 30, _radius, _winkel, 2 * Math.PI);
        Semesteraufgabe.context.fillStyle = "#008b00";
        Semesteraufgabe.context.fill();
        Semesteraufgabe.context.closePath();
    }
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=WieseIdee.js.map