namespace Aufg8_Wiese {
    export class Honigbiene extends Bee {
        
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.04;
            this.setStartPosition();
            this.setTargetPosition();
            console.log("Create Honigbiene");
        }
         
        
        setStartPosition(): void {
            this.x = 1250;
            this.y = 420;
            
            
        }
        
        setTargetPosition(): void {
            let i: number = Math.floor(Math.random() * (flowers.length - 1));
            this.xTarget = flowers[i].x + 5;
            this.yTarget = flowers[i].y - 20;
        }
        

        fly(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5) 
                this.setTargetPosition();
            else {
                    this.x += xDiff * this.speed;
                    this.y += yDiff * this.speed;
                }
            }

    }//ende der Klasse Bee
} //ende des Namespace