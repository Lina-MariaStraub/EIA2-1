namespace Semesteraufgabe {

    window.addEventListener("load", init);

    export let inhalt: CanvasRenderingContext2D;

    let monsters: Monster[] = [];
    export let sweets: Sweet[] = [];
    let menge: number = 1;
    let imgData: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        inhalt = canvas.getContext("2d");

        zeichneHimmel();
    
        placeRandomSweets();

        imgData = inhalt.getImageData(0, 0, canvas.width, canvas.height);        
        window.setTimeout(animate, 20);

    }

    function placeRandomSweets(): void {
        let numberSweets: any = Math.floor((Math.random() * 40) + 5);

        for (let i: number = 0; i < numberSweets; i++) {
            let x: number = Math.round((Math.random() * inhalt.canvas.width) - 30);
            let y: number = Math.round((Math.random() * 200) + 520);
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


    function animate(): void {

        inhalt.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < monsters.length; i++) {
            let b: Monster = monsters[i];
            b.update();
        }

        window.setTimeout(animate, 20);
    }

    function zeichneHimmel(): void {
        inhalt.beginPath();
        inhalt.rect(0, 0, inhalt.canvas.width, inhalt.canvas.height);
        inhalt.closePath();
        inhalt.fillStyle = "#C4E4F5";
        inhalt.fill();
    }
}