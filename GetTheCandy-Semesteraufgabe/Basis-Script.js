var Semesteraufgabe;
(function (Semesteraufgabe) {
    window.addEventListener("load", init);
    Semesteraufgabe.sweets = [];
    let monsters = [];
    let menge = 1;
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Semesteraufgabe.inhalt = canvas.getContext("2d");
        //    alert("Willkomen bei Get The Candy!" + " Aufgabe: Sammle alle Süßigkeiten bevor das Monster sie erreichen kann, indem du auf sie drauf klickst.");
        zeichneHimmel();
        placeRandomSweets();
        drawMonster();
        imgData = Semesteraufgabe.inhalt.getImageData(0, 0, canvas.width, canvas.height);
        window.setTimeout(animate, 20);
    }
    function placeRandomSweets() {
        let numberSweets = Math.floor((Math.random() * 15) + 10);
        for (let i = 0; i < numberSweets; i++) {
            let x = Math.round((Math.random() * 1300) + 100);
            let y = Math.round((Math.random() * 600) + 30);
            let p = Math.round((Math.random() * 3) + 0);
            switch (p) {
                case 0:
                    let drop = new Semesteraufgabe.DropsSweet(x, y);
                    drop.draw();
                    Semesteraufgabe.sweets.push(drop);
                    break;
                case 1:
                    let bonBon = new Semesteraufgabe.BonBonSweet(x, y);
                    bonBon.draw();
                    Semesteraufgabe.sweets.push(bonBon);
                    break;
                case 2:
                    let lollipop = new Semesteraufgabe.LollipopSweet(x, y);
                    lollipop.draw();
                    Semesteraufgabe.sweets.push(lollipop);
                    break;
                default:
                    break;
            }
        }
    }
    function drawMonster() {
        let beast = new Semesteraufgabe.Monster(1450, 690);
        beast.draw();
    }
    function animate() {
        Semesteraufgabe.inhalt.putImageData(imgData, 0, 0);
        window.setTimeout(animate, 20);
        for (let i = 0; i < monsters.length; i++) {
            let beast = new Semesteraufgabe.Monster(1450, 690);
            beast.update();
        }
    }
    function zeichneHimmel() {
        Semesteraufgabe.inhalt.beginPath();
        Semesteraufgabe.inhalt.rect(0, 0, Semesteraufgabe.inhalt.canvas.width, Semesteraufgabe.inhalt.canvas.height);
        Semesteraufgabe.inhalt.closePath();
        Semesteraufgabe.inhalt.fillStyle = "#C4E4F5";
        Semesteraufgabe.inhalt.fill();
    }
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=Basis-Script.js.map