namespace Aufg4_Canvas {

    window.addEventListener("load", init);

    let inhalt: CanvasRenderingContext2D;
    let x: number[] = [];
    let y: number[] = [];
    let n: number = 11;
    let _menge: number = 1;
    let radius: number = 10;

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

        zeichneKorb(1250, 420, 7)

        drawSweetRandom();

        biene(1250, 420);

        let bild = inhalt.getImageData(0, 0, canvas.width, canvas.height);
        for (let i: number = 0; i < n; i++) {
            x[i] = 1250;
            y[i] = 420;
        }

        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);

    }

    function biene(_x: number, _y: number): void {

        inhalt.beginPath();
        inhalt.arc(_x, _y, radius, 0, 2 * Math.PI);
        inhalt.closePath();
        inhalt.fillStyle = " black ";
        inhalt.fill();

    }

    function neueBiene(): void {

        x.push(1250);
        y.push(420);

    }

    function animate(): void {
        console.log("Animate called");

        inhalt.putImageData(bild, 0, 0);

        for (let i: number = 0; i < n; i++) {
            x[i] += Math.random() * 2 - 2;
            y[i] += Math.random() * 4 - 2;
            biene(x[i], y[i]);

        }
        if (x[i] < 0) {
            x[i] = 1500;
        }
        if (y[i] < 0) {
            y[i] = 710;
        }
        if (y[i] > 710) {
            y[i] = 0;
        }
        drawBee(x[i], y[i]);
        window.setTimeout(animate, 20);
    }


    function random(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }

    function erstelleBienen(_menge: number): void {
        for (let i: number = 0; i < _menge; i++) {
            let x: number = random(0, inhalt.canvas.width);
            let y: number = random(0, inhalt.canvas.height);

            biene(x, y);
        }
    }

    //        function plusBiene(_event: MouseEvent): void {
    //            for (let i: number = 0; i < 1; i++) {
    //                let x: number = random(_event.offsetX, _event.clientX);
    //                let y: number = random(_event.clientY, _event.clientY);
    //
    //                biene(x, y);
    //            }}




    function drawSweetRandom(): void {
        let numberSweets: any = Math.floor((Math.random() * 30) + 5);
        let _x: number;
        let _y: number;
        let _p: number;
        let _radius: number;
        let _winkel: number;

        for (var i: number = 0; i < numberSweets; i++) {
            _x = Math.round((Math.random() * inhalt.canvas.width) - 30);
            _y = Math.round((Math.random() * 200) + 520);
            _p = Math.round((Math.random() * 3) + 0);
            switch (_p) {
                case 0:
                    drawDropsBlume(_x, _y, 10, 0);
                    break;
                case 1:
                    drawBonBon(_x, _y, 12, 0);
                    break;
                case 2:
                    drawlollipop(_x, _y, 5, 0);
                    break;
                default:
                    break;
            }
        }
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
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 2, _y + 4, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x - 2, _y + 15, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 1, _y + 24, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 12, _y + 30, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 18, _y + 35, _radius, 0, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
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


    function drawDropsBlume(_x: number, _y: number, _radius: number, _winkel: number): void {

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x - 3, _y + 10, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#e066ff";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 7, _y + 9, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#ff6347";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 10, _y, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#e066ff";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x + 3, _y - 8, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#ff6347";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x - 8, _y - 8, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#e066ff";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x - 12, _y, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#ff6347";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();
    }

    function drawBonBon(_x: number, _y: number, _radius: number, _winkel: number): void {

        inhalt.beginPath();

        inhalt.fillStyle = " #c71585 ";
        inhalt.strokeStyle = "#c71585";
        inhalt.moveTo(_x, _y);
        inhalt.lineTo(_x + 15, _y - 15);
        inhalt.lineTo(_x + 15, _y + 15);
        inhalt.closePath();
        inhalt.fill();
        inhalt.stroke();

        inhalt.beginPath();
        inhalt.fillStyle = " #c71585 ";
        inhalt.strokeStyle = "#c71585";
        inhalt.moveTo(_x, _y);
        inhalt.lineTo(_x - 15, _y + 15);
        inhalt.lineTo(_x - 15, _y - 15);
        inhalt.closePath();
        inhalt.fill();
        inhalt.stroke();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#ff69b4";
        inhalt.fill();
        inhalt.closePath();
    }

    function drawlollipop(_x: number, _y: number, _radius: number, _winkel: number): void {

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x, _y, _radius + 20, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#8b0000";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x, _y, _radius + 15, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x, _y, _radius + 10, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#8b0000";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x, _y, _radius + 5, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#FFFFFF";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
        inhalt.fillStyle = "#8b0000";
        inhalt.fill();
        inhalt.closePath();
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

