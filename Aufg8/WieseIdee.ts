
namespace Aufg8_Wiese {

    window.addEventListener("load", init);

    export let inhalt: CanvasRenderingContext2D;

    let bees: Bee[] = [];
    export let flowers: Flower[] = [];
    let menge: number = 10;
    let imgData: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        inhalt = canvas.getContext("2d");


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

        imgData = inhalt.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < menge; i++) {
            neueBiene();
        }
        

        for (let i: number = 0; i < 5; i++) {
            var hb: Honigbiene = new Honigbiene(1250, 420);
            bees.push(hb);
        }

        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);

    }

    function placeRandomFlowers(): void {
        let numberSweets: any = Math.floor((Math.random() * 40) + 5);

        for (let i: number = 0; i < numberSweets; i++) {
            let x: number = Math.round((Math.random() * inhalt.canvas.width) - 30);
            let y: number = Math.round((Math.random() * 200) + 520);
            let p: number = Math.round((Math.random() * 3) + 0);
            switch (p) {
                case 0:
                    let drop: DropsFlower = new DropsFlower(x, y);
                    drop.draw();
                    flowers.push(drop);
                    break;
                case 1:
                    let bonBon: BonBonFlower = new BonBonFlower(x, y);
                    bonBon.draw();
                    flowers.push(bonBon);
                    break;
                case 2:
                    let lollipop: LollipopFlower = new LollipopFlower(x, y);
                    lollipop.draw();
                    flowers.push(lollipop);
                    break;
                default:
                    break;
            }

        }
    }


    function neueBiene(): void {
        let b: Bee = new Bee(1250, 420);
        b.setRandomStyle();

        bees.push(b);
    }

    function animate(): void {

        inhalt.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < bees.length; i++) {
            let b: Bee = bees[i];
            b.update();
            b.goCompleteInandOutOfTheScreen();
        }

        window.setTimeout(animate, 20);
    }



    function zeichneKorb(_x: number, _y: number, _radius: number): void {

        inhalt.beginPath();
        inhalt.rect(_x, _y, 25, 25);
        inhalt.closePath();
        inhalt.fillStyle = " brown ";
        inhalt.fill();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 12, _y - 3, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "brown";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 2, _y + 4, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "brown";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x - 2, _y + 15, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "brown";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 1, _y + 24, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "brown";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 12, _y + 30, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "brown";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 18, _y + 30, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "brown";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 27, _y + 24, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "brown";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 27, _y + 15, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "brown";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 24, _y + 4, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "brown";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 18, _y + 15, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "brown";
        inhalt.fill();
        inhalt.closePath();

    }

    function zeichneBerg(_x: number, _y: number, _farbe: any): void {

        inhalt.beginPath();
        inhalt.fillStyle = _farbe;
        inhalt.strokeStyle = _farbe;
        inhalt.moveTo(_x, _y);
        inhalt.lineTo(_x + 200, _y - 350);
        inhalt.lineTo(_x + 400, _y);
        inhalt.closePath();
        inhalt.fill();
        inhalt.stroke();
    }

    function zeichneHimmel(): void {
        inhalt.beginPath();
        inhalt.rect(0, 0, inhalt.canvas.width, inhalt.canvas.height);
        inhalt.closePath();
        inhalt.fillStyle = "#C4E4F5";
        inhalt.fill();
    }

    function zeichneSonne(): void {

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(0, 0, 150, 0, 2 * Math.PI);
        inhalt.fillStyle = "#ffff00";
        inhalt.fill();
        inhalt.strokeStyle = "#C4E4F5";
        inhalt.lineWidth = 10;
        inhalt.stroke();
        inhalt.closePath();
    }

    function sonnenStrahlen(_x: number, _y: number): void {


        inhalt.beginPath();
        inhalt.moveTo(0, 0);
        inhalt.lineTo(_x, _y);
        inhalt.closePath();
        inhalt.strokeStyle = "#ffff00";
        inhalt.lineWidth = 5;
        inhalt.stroke();
    }

    function machsGruen(): void {

        inhalt.beginPath();
        inhalt.rect(0, 510, inhalt.canvas.width, 200);
        inhalt.closePath();
        inhalt.fillStyle = "    #7cfc00";
        inhalt.fill();
    }

    function zuckerwatte(_x: number, _y: number, _radius: number, _winkel: number): void {

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();
    }

    function wolkenZusammen(_x: number, _y: number, _radius: number, _winkel: number): void {

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 15, _y + 10, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 20, _y + 10, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();
    }

    function baumstamm(_x: number, _y: number, _width: number, _height: number): void {

        inhalt.beginPath();
        inhalt.rect(_x, _y, _width, _height);
        inhalt.closePath();
        inhalt.fillStyle = " #ffa54f ";
        inhalt.fill();
    }

    function baumKrone(_x: number, _y: number, _radius: number, _winkel: number): void {

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#008b00";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 20, _y - 20, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#008b00";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 20, _y + 20, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#008b00";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 30, _y + 35, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#008b00";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 30, _y - 30, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#008b00";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 50, _y - 50, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#008b00";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 80, _y - 30, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#008b00";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 45, _y, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#008b00";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 90, _y, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#008b00";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 80, _y + 30, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#008b00";
        inhalt.fill();
        inhalt.closePath();

    }

}