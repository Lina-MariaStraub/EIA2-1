var Aufg8_Wiese;
(function (Aufg8_Wiese) {
    window.addEventListener("load", init);
    let bees = [];
    Aufg8_Wiese.flowers = [];
    let menge = 10;
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufg8_Wiese.inhalt = canvas.getContext("2d");
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
        imgData = Aufg8_Wiese.inhalt.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < menge; i++) {
            neueBiene();
        }
        for (let i = 0; i < 5; i++) {
            var hb = new Aufg8_Wiese.Honigbiene(1250, 420);
            bees.push(hb);
        }
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);
    }
    function placeRandomFlowers() {
        let numberSweets = Math.floor((Math.random() * 20) + 5);
        for (let i = 0; i < numberSweets; i++) {
            let x = Math.round((Math.random() * Aufg8_Wiese.inhalt.canvas.width) - 30);
            let y = Math.round((Math.random() * 200) + 520);
            let p = Math.round((Math.random() * 3) + 0);
            switch (p) {
                case 0:
                    let drop = new Aufg8_Wiese.DropsFlower(x, y);
                    drop.draw();
                    Aufg8_Wiese.flowers.push(drop);
                    break;
                case 1:
                    let bonBon = new Aufg8_Wiese.BonBonFlower(x, y);
                    bonBon.draw();
                    Aufg8_Wiese.flowers.push(bonBon);
                    break;
                case 2:
                    let lollipop = new Aufg8_Wiese.LollipopFlower(x, y);
                    lollipop.draw();
                    Aufg8_Wiese.flowers.push(lollipop);
                    break;
                default:
                    break;
            }
        }
    }
    function neueBiene() {
        let b = new Aufg8_Wiese.Bee(1250, 420);
        b.setRandomStyle();
        bees.push(b);
    }
    function animate() {
        Aufg8_Wiese.inhalt.putImageData(imgData, 0, 0);
        for (let i = 0; i < bees.length; i++) {
            let b = bees[i];
            b.update();
            b.fullOutAndIn();
        }
        window.setTimeout(animate, 20);
    }
    function zeichneKorb(_x, _y, _radius) {
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.rect(_x, _y, 25, 25);
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.fillStyle = " brown ";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 12, _y - 3, _radius, 0, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "brown";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 2, _y + 4, _radius, 0, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "brown";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x - 2, _y + 15, _radius, 0, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "brown";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 1, _y + 24, _radius, 0, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "brown";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 12, _y + 30, _radius, 0, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "brown";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 18, _y + 30, _radius, 0, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "brown";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 27, _y + 24, _radius, 0, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "brown";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 27, _y + 15, _radius, 0, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "brown";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 24, _y + 4, _radius, 0, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "brown";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 18, _y + 15, _radius, 0, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "brown";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
    }
    function zeichneBerg(_x, _y, _farbe) {
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.fillStyle = _farbe;
        Aufg8_Wiese.inhalt.strokeStyle = _farbe;
        Aufg8_Wiese.inhalt.moveTo(_x, _y);
        Aufg8_Wiese.inhalt.lineTo(_x + 200, _y - 350);
        Aufg8_Wiese.inhalt.lineTo(_x + 400, _y);
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.stroke();
    }
    function zeichneHimmel() {
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.rect(0, 0, Aufg8_Wiese.inhalt.canvas.width, Aufg8_Wiese.inhalt.canvas.height);
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.fillStyle = "#C4E4F5";
        Aufg8_Wiese.inhalt.fill();
    }
    function zeichneSonne() {
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(0, 0, 150, 0, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#ffff00";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.strokeStyle = "#C4E4F5";
        Aufg8_Wiese.inhalt.lineWidth = 10;
        Aufg8_Wiese.inhalt.stroke();
        Aufg8_Wiese.inhalt.closePath();
    }
    function sonnenStrahlen(_x, _y) {
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.lineTo(_x, _y);
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.strokeStyle = "#ffff00";
        Aufg8_Wiese.inhalt.lineWidth = 5;
        Aufg8_Wiese.inhalt.stroke();
    }
    function machsGruen() {
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.rect(0, 510, Aufg8_Wiese.inhalt.canvas.width, 200);
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.fillStyle = "    #7cfc00";
        Aufg8_Wiese.inhalt.fill();
    }
    function zuckerwatte(_x, _y, _radius, _winkel) {
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#FFFFFF";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
    }
    function wolkenZusammen(_x, _y, _radius, _winkel) {
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#FFFFFF";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 15, _y + 10, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#FFFFFF";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 20, _y + 10, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#FFFFFF";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
    }
    function baumstamm(_x, _y, _width, _height) {
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.rect(_x, _y, _width, _height);
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.fillStyle = " #ffa54f ";
        Aufg8_Wiese.inhalt.fill();
    }
    function baumKrone(_x, _y, _radius, _winkel) {
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#008b00";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 20, _y - 20, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#008b00";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 20, _y + 20, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#008b00";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 30, _y + 35, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#008b00";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 30, _y - 30, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#008b00";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 50, _y - 50, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#008b00";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 80, _y - 30, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#008b00";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 45, _y, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#008b00";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 90, _y, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#008b00";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
        Aufg8_Wiese.inhalt.moveTo(0, 0);
        Aufg8_Wiese.inhalt.beginPath();
        Aufg8_Wiese.inhalt.arc(_x + 80, _y + 30, _radius, _winkel, 2 * Math.PI);
        Aufg8_Wiese.inhalt.fillStyle = "#008b00";
        Aufg8_Wiese.inhalt.fill();
        Aufg8_Wiese.inhalt.closePath();
    }
})(Aufg8_Wiese || (Aufg8_Wiese = {}));
//# sourceMappingURL=WieseIdee.js.map