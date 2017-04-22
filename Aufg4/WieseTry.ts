namespace Aufg4_Canvas {

    window.addEventListener("load", init);

    let inhalt: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        inhalt = canvas.getContext("2d");


        zeichneHimmel();
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

        baumstamm(1300, 360, 50, 150);
//        baumKrone(1300, 360, 35, 0);

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
        inhalt.arc(0, 0, 150, 0, 2 * Math.PI)
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
        inhalt.fillStyle = "#ffdab9";
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
    
//    function baumKrone(_x: number, _y: number, _radius: number, _winkel: number ): void {
//
//        inhalt.moveTo(0, 0);
//        inhalt.beginPath();
//        inhalt.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
//        inhalt.fillStyle = "#008b00";
//        inhalt.fill();
//        inhalt.closePath();
//        
//        inhalt.moveTo(0, 0);
//        inhalt.beginPath();
//        inhalt.arc(_x +20, _y - 20, _radius, _winkel, 2 * Math.PI);
//        inhalt.fillStyle = "#008b00";
//        inhalt.fill();
//        inhalt.closePath();
//        
//        inhalt.moveTo(0, 0);
//        inhalt.beginPath();
//        inhalt.arc(_x +20, _y+ 20, _radius, _winkel, 2 * Math.PI);
//        inhalt.fillStyle = "#008b00";
//        inhalt.fill();
//        inhalt.closePath();
//
//    }
    
    ///////////////////////////////////////////////

//    function baumKrone(_x: number, _y: number): void {
//
//        inhalt.beginPath();
//        inhalt.fillStyle = "green";
//        inhalt.moveTo(_x, _y);
//        inhalt.lineTo(_x, _y - 200);
//        inhalt.lineTo(_x + 200, _y + 150);
//        inhalt.closePath();
//        inhalt.fill();
//    }

}

