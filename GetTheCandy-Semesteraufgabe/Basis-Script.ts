namespace Semesteraufgabe {

    window.addEventListener("load", init);

    export let inhalt: CanvasRenderingContext2D;

    export let sweets: Sweet[] = [];
    export let beast: Monster;
    let menge: number = 1;
    let imgData: ImageData;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvas.addEventListener("click", function(event) { canvasClicked(event, canvas); });
        inhalt = canvas.getContext("2d");

        //    alert("Willkomen bei Get The Candy!" + " Aufgabe: Sammle alle Süßigkeiten bevor das Monster sie erreichen kann, indem du auf sie drauf klickst."    
        zeichneHimmel();


        placeRandomSweets();
        drawMonster();


        imgData = inhalt.getImageData(0, 0, canvas.width, canvas.height);
        window.setTimeout(animate, 20);

    }


    function placeRandomSweets(): void {
        //        let numberSweets: any = Math.floor((Math.random() * 15) + 10);
        let numberSweets: any = 7;

        for (let i: number = 0; i < numberSweets; i++) {
            let x: number = Math.round((Math.random() * 1300) + 100);
            let y: number = Math.round((Math.random() * 600) + 30);
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
    

    function drawMonster(): void {
        beast = new Monster(1450, 690);

    }

    function canvasClicked(event: MouseEvent, canvas: any): void {
        //Calculate actual x y positions on canvas
        let rect = canvas.getBoundingClientRect();
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
        if (sweets.length==0){
            
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


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////      
    function start(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        canvas.addEventListener("click", startTutorial);
        inhalt = canvas.getContext("2d");
        console.log(inhalt);

        zeichneHimmel();

        // Text 
        inhalt.stroke();
        inhalt.fillStyle = "black";
        inhalt.font = "100px Arial";
        inhalt.fillText("Get the Candy", 250, 250);
        inhalt.font = "60px Arial";
        inhalt.fillText("Bitte klicken Sie ein Mal.", 250, 450);




        function startTutorial(_event: Event): void {

            let canvas: HTMLCanvasElement;
            canvas = document.getElementsByTagName("canvas")[0];
            canvas.width = 1500;
            canvas.height = 710;
            console.log(canvas);
            canvas.removeEventListener("click", startTutorial);
            canvas.addEventListener("click", init);

            inhalt = canvas.getContext("2d");
            console.log(inhalt);

            zeichneHimmel();

            // Schrift
            inhalt.stroke();
            inhalt.fillStyle = "black";
            inhalt.font = "35px Arial";
            inhalt.fillText("Lösche die Süßigkeiten(mit klicken) aus, bevor das Monster sie frisst. ", 50, 250);
            inhalt.fillText("Frisst das Monster drei Süßigkeiten, ist das Spiel vorbei. ", 50, 530);
            inhalt.fillText("Klicke um das Spiel zu starten.", 50, 620);



        };


    }
}