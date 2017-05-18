namespace Aufg8_Wiese {

    export class Bee {

        x: number;
        y: number;
        scale: number; // Was ist g?
        farbe: string;


           
        constructor(_x: number, _y: number) {
            console.log("Hey, I'm Bob!");
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.fly();
            this.drawBiene();
        }

        fly(): void {

            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
            this.x--;

        }

        setRandomStyle(): void {
            this.scale = Math.random() * 5 + 2;
            this.farbe = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

        fullOutAndIn(): void {

            if (this.x < 0) {
                this.x = 1500;
            }
            if (this.y < 0) {
                this.y = 710;
            }
            if (this.y > 710) {
                this.y = 0;
            }

        }

        drawBiene(): void {

            //abtrakt
            }
        }
}