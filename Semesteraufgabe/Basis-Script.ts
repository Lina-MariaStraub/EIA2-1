namespace Semesteraufgabe {

    window.addEventListener("load", init);

    export let inhalt: CanvasRenderingContext2D;

    let bees: Monster[] = [];
    export let sweets: Sweet[] = [];
    let menge: number = 10;
    let imgData: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        inhalt = canvas.getContext("2d");


    
        placeRandomSweets();

        imgData = inhalt.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < menge; i++) {
            neueBiene();
        }
        

        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);

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


    function neueBiene(): void {
        let b: Monster = new Monster(1250, 420);
        b.setRandomStyle();

        bees.push(b);
    }

    function animate(): void {

        inhalt.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < bees.length; i++) {
            let b: Monster = bees[i];
            b.update();
        }

        window.setTimeout(animate, 20);
    }


}