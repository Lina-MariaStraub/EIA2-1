namespace Semesteraufgabe {

    export class Sweet {

        x: number;
        y: number;
        radius: number = 10;
        winkel: number = 0;
        p: number;
        width: number;
        height: number;


        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.width = 50;
            this.height = 52;
        }

        draw(): void {

            //abtrakt
        }

        // Teil der Boundingbox, hier wird die "Box" definiert, in die geklickt werden kann
        hit(x: number, y: number): boolean {
            //verschieben von der hitbox ins zentrum
            let middleXAx: number = this.x - this.width / 2;
            let middleYAx: number = this.y - this.height / 2;
            let hit: boolean = false;
            if (x <= middleXAx + this.width && x >= middleXAx &&
                y <= middleYAx + this.height && y >= middleYAx) {
                hit = true;
            }
            return hit;
        }

    }
}