namespace Semesteraufgabe {

    window.addEventListener("load", init);

    export let inhalt: CanvasRenderingContext2D;

    export let sweets: Sweet[] = [];
    let monsters: Monster [] = [];
    let menge: number = 1;
    let imgData: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        inhalt = canvas.getContext("2d");
        
    //    alert("Willkomen bei Get The Candy!" + " Aufgabe: Sammle alle Süßigkeiten bevor das Monster sie erreichen kann, indem du auf sie drauf klickst.");
        

        zeichneHimmel();
    
        
        placeRandomSweets();
        drawMonster();

        imgData = inhalt.getImageData(0, 0, canvas.width, canvas.height);        
        window.setTimeout(animate, 20);

    }

    function placeRandomSweets(): void {
        let numberSweets: any = Math.floor((Math.random() * 15) + 10);

        for (let i: number = 0; i < numberSweets; i++) {
            let x: number = Math.round((Math.random() * 1300) + 100);
            let y: number = Math.round((Math.random() * 600) + 30);
            let p: number = Math.round((Math.random() * 3) + 0);
            switch (p) {
                case 0:
                    let drop: DropsSweet = new DropsSweet(x, y);
                    drop.draw();
                    sweets.push(drop);
                    break;
                case 1:
                    let bonBon: BonBonSweet = new BonBonSweet(x, y);
                    bonBon.draw();
                    sweets.push(bonBon);
                    break;
                case 2:
                    let lollipop: LollipopSweet = new LollipopSweet(x, y);
                    lollipop.draw();
                    sweets.push(lollipop);
                    break;
                default:
                    break;
            }

        }
    }
    
        function drawMonster(): void {
        let beast: Monster = new Monster(1450, 690);
        beast.draw();
    }


    function animate(): void {

        inhalt.putImageData(imgData, 0, 0);
        window.setTimeout(animate, 20);  
            
        for (let i: number = 0; i < monsters.length; i++) {
            let beast: Monster = monsters[i];
            beast.update();
        }
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