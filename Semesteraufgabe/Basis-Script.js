var Semesteraufgabe;
(function (Semesteraufgabe) {
    window.addEventListener("load", init);
    let monsters = [];
    Semesteraufgabe.sweets = [];
    let menge = 1;
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Semesteraufgabe.inhalt = canvas.getContext("2d");
        zeichneHimmel();
        placeRandomSweets();
        imgData = Semesteraufgabe.inhalt.getImageData(0, 0, canvas.width, canvas.height);
        window.setTimeout(animate, 20);
    }
    function placeRandomSweets() {
        let numberSweets = Math.floor((Math.random() * 40) + 5);
        for (let i = 0; i < numberSweets; i++) {
            let x = Math.round((Math.random() * Semesteraufgabe.inhalt.canvas.width) - 30);
            let y = Math.round((Math.random() * 200) + 520);
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
    function animate() {
        Semesteraufgabe.inhalt.putImageData(imgData, 0, 0);
        for (let i = 0; i < monsters.length; i++) {
            let b = monsters[i];
            b.update();
        }
        window.setTimeout(animate, 20);
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