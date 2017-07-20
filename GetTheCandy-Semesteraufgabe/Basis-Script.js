var Semesteraufgabe;
(function (Semesteraufgabe) {
    window.addEventListener("load", init);
    Semesteraufgabe.sweets = [];
    let menge = 1;
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvas.addEventListener("click", function (event) { canvasClicked(event, canvas); });
        Semesteraufgabe.inhalt = canvas.getContext("2d");
        //    alert("Willkomen bei Get The Candy!" + " Aufgabe: Sammle alle Süßigkeiten bevor das Monster sie erreichen kann, indem du auf sie drauf klickst."    
        zeichneHimmel();
        placeRandomSweets();
        drawMonster();
        imgData = Semesteraufgabe.inhalt.getImageData(0, 0, canvas.width, canvas.height);
        window.setTimeout(animate, 20);
    }
    function placeRandomSweets() {
        //        let numberSweets: any = Math.floor((Math.random() * 15) + 10);
        let numberSweets = 7;
        for (let i = 0; i < numberSweets; i++) {
            let x = Math.round((Math.random() * 1300) + 100);
            let y = Math.round((Math.random() * 600) + 30);
            let p = Math.round((Math.random() * 3) + 0);
            switch (p) {
                case 0:
                    let drop = new Semesteraufgabe.DropsSweet(x, y);
                    Semesteraufgabe.sweets.push(drop);
                    break;
                case 1:
                    let bonBon = new Semesteraufgabe.BonBonSweet(x, y);
                    Semesteraufgabe.sweets.push(bonBon);
                    break;
                case 2:
                    let lollipop = new Semesteraufgabe.LollipopSweet(x, y);
                    Semesteraufgabe.sweets.push(lollipop);
                    break;
                default:
                    break;
            }
        }
    }
    function drawMonster() {
        Semesteraufgabe.beast = new Semesteraufgabe.Monster(1450, 690);
    }
    function canvasClicked(event, canvas) {
        //Calculate actual x y positions on canvas
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        for (let i = 0; i < Semesteraufgabe.sweets.length; i++) {
            if (Semesteraufgabe.sweets[i].hit(x, y)) {
                let object = Semesteraufgabe.sweets[i];
                Semesteraufgabe.sweets.splice(i, 1);
                Semesteraufgabe.beast.sweetChanged(object);
                break;
            }
        }
        if (Semesteraufgabe.sweets.length == 0) {
            alert("Klasse! Du hast gewonnen. Vielleicht bekommst du eine Süßigkeit von mir, wenn du es nachweisen kannst.");
        }
    }
    function animate() {
        Semesteraufgabe.inhalt.putImageData(imgData, 0, 0);
        window.setTimeout(animate, 20);
        for (let i = 0; i < Semesteraufgabe.sweets.length; i++) {
            Semesteraufgabe.sweets[i].draw();
        }
        Semesteraufgabe.beast.update();
        //    
    }
    function zeichneHimmel() {
        Semesteraufgabe.inhalt.beginPath();
        Semesteraufgabe.inhalt.rect(0, 0, Semesteraufgabe.inhalt.canvas.width, Semesteraufgabe.inhalt.canvas.height);
        Semesteraufgabe.inhalt.closePath();
        Semesteraufgabe.inhalt.fillStyle = "#C4E4F5";
        Semesteraufgabe.inhalt.fill();
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    function start(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        canvas.addEventListener("click", startTutorial);
        Semesteraufgabe.inhalt = canvas.getContext("2d");
        console.log(Semesteraufgabe.inhalt);
        zeichneHimmel();
        // Text 
        Semesteraufgabe.inhalt.stroke();
        Semesteraufgabe.inhalt.fillStyle = "black";
        Semesteraufgabe.inhalt.font = "100px Arial";
        Semesteraufgabe.inhalt.fillText("Get the Candy", 250, 250);
        Semesteraufgabe.inhalt.font = "60px Arial";
        Semesteraufgabe.inhalt.fillText("Bitte klicken Sie ein Mal.", 250, 450);
        function startTutorial(_event) {
            let canvas;
            canvas = document.getElementsByTagName("canvas")[0];
            canvas.width = 1500;
            canvas.height = 710;
            console.log(canvas);
            canvas.removeEventListener("click", startTutorial);
            canvas.addEventListener("click", init);
            Semesteraufgabe.inhalt = canvas.getContext("2d");
            console.log(Semesteraufgabe.inhalt);
            zeichneHimmel();
            // Schrift
            Semesteraufgabe.inhalt.stroke();
            Semesteraufgabe.inhalt.fillStyle = "black";
            Semesteraufgabe.inhalt.font = "35px Arial";
            Semesteraufgabe.inhalt.fillText("Lösche die Süßigkeiten(mit klicken) aus, bevor das Monster sie frisst. ", 50, 250);
            Semesteraufgabe.inhalt.fillText("Frisst das Monster drei Süßigkeiten, ist das Spiel vorbei. ", 50, 530);
            Semesteraufgabe.inhalt.fillText("Klicke um das Spiel zu starten.", 50, 620);
        }
        ;
    }
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=Basis-Script.js.map