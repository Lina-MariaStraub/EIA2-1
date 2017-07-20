namespace Semesteraufgabe {

    window.addEventListener("load", init);

    export let inhalt: CanvasRenderingContext2D;

    export let sweets: Sweet[] = [];
    export let beast: Monster;
    let menge: number = 1;
    let imgData: ImageData;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        resizeCanvas();
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        //Canvas klickbar gemacht 
        canvas.addEventListener("click", canvasClicked);
        inhalt = canvas.getContext("2d");
        alert("Willkomen bei Get The Candy!" + " Aufgabe: Sammle alle Süßigkeiten bevor das Monster sie erreichen kann, indem du auf sie drauf klickst.");
        zeichneHimmel();


        placeRandomSweets();
        drawMonster();

        imgData = inhalt.getImageData(0, 0, canvas.width, canvas.height);
        window.setTimeout(animate, 20);

    }


    function placeRandomSweets(): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        //let numberSweets: any = Math.floor((Math.random() * 15) + 10);
        let numberSweets: any = 15;

        for (let i: number = 0; i < numberSweets; i++) {
            let x: number = Math.round((Math.random() * (canvas.width - 200)) + 100);
            let y: number = Math.round((Math.random() * (canvas.height - 110)) + 55);
            let p: number = Math.round((Math.random() * 3) + 0);
            switch (p) {
                case 0:
                    let drop: DropsSweet = new DropsSweet(x, y);
                    sweets.push(drop);
                    break;
                case 1:
                    let bonBon: BonBonSweet = new BonBonSweet(x, y);
                    sweets.push(bonBon);
                    break;
                case 2:
                    let lollipop: LollipopSweet = new LollipopSweet(x, y);
                    sweets.push(lollipop);
                    break;
                default:
                    break;
            }

        }
    }

    // Die Größe des Canvas wird auf die Größe des Fensters/der Ansicht skaliert
    function resizeCanvas(): void {

        let margin: number = 50;
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = window.innerWidth - margin;
        canvas.height = window.innerHeight - margin;
    }

    function drawMonster(): void {
        beast = new Monster(100, 100);

    }


    //Korrigiert. Wir bekommen die richtige Position des Klicks auf dem Canvas, dadurch das der Browser einen bestimmten Margin, etc. hat 
    function canvasClicked(event: MouseEvent): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];

        // Implementiert nach: http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
        let rect = canvas.getBoundingClientRect();
        console.log(rect);
        console.log(event);
        let x: number = event.clientX - rect.left;
        let y: number = event.clientY - rect.top;
        for (let i: number = 0; i < sweets.length; i++) {
            if (sweets[i].hit(x, y)) {
                let object: Sweet = sweets[i];
                sweets.splice(i, 1);
                beast.sweetChanged(object);
                break;

            }
        }
        if (sweets.length == 0) {

            alert("Klasse! Du hast gewonnen. Vielleicht bekommst du eine Süßigkeit von mir, wenn du es nachweisen kannst.");

        }
    }


    function animate(): void {

        inhalt.putImageData(imgData, 0, 0);
        window.setTimeout(animate, 20);

        for (let i: number = 0; i < sweets.length; i++) {
            sweets[i].draw();

        }
        beast.update();

        //    

    }

    function zeichneHimmel(): void {
        inhalt.beginPath();
        inhalt.rect(0, 0, inhalt.canvas.width, inhalt.canvas.height);
        inhalt.closePath();
        inhalt.fillStyle = "#C4E4F5";
        inhalt.fill();
    }


}