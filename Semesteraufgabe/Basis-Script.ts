namespace Semesteraufgabe {

    window.addEventListener("load", init);

    export let inhalt: CanvasRenderingContext2D;

    let bees: Bee[] = [];
    export let flowers: Flower[] = [];
    let menge: number = 10;
    let imgData: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        inhalt = canvas.getContext("2d");


    
        placeRandomFlowers();

        imgData = inhalt.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < menge; i++) {
            neueBiene();
        }
        

        for (let i: number = 0; i < 5; i++) {
            var hb: Honigbiene = new Honigbiene(1250, 420);
            bees.push(hb);
        }

        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);

    }

    function placeRandomFlowers(): void {
        let numberSweets: any = Math.floor((Math.random() * 40) + 5);

        for (let i: number = 0; i < numberSweets; i++) {
            let x: number = Math.round((Math.random() * inhalt.canvas.width) - 30);
            let y: number = Math.round((Math.random() * 200) + 520);
            let p: number = Math.round((Math.random() * 3) + 0);
            switch (p) {
                case 0:
                    let drop: DropsFlower = new DropsFlower(x, y);
                    drop.draw();
                    flowers.push(drop);
                    break;
                case 1:
                    let bonBon: BonBonFlower = new BonBonFlower(x, y);
                    bonBon.draw();
                    flowers.push(bonBon);
                    break;
                case 2:
                    let lollipop: LollipopFlower = new LollipopFlower(x, y);
                    lollipop.draw();
                    flowers.push(lollipop);
                    break;
                default:
                    break;
            }

        }
    }


    function neueBiene(): void {
        let b: Bee = new Bee(1250, 420);
        b.setRandomStyle();

        bees.push(b);
    }

    function animate(): void {

        inhalt.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < bees.length; i++) {
            let b: Bee = bees[i];
            b.update();
        }

        window.setTimeout(animate, 20);
    }


}