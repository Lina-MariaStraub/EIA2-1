namespace Love {
    
    export class Heart {

        x: number;
        y: number;
        radius: number;
        winkel: number;

        constructor(_x, _y, _radius, _winkel) {

            this.setStartPosition();
            this.x = _x;
            this.y = _y;

           }
        
        setStartPosition(): void {
            this.x = 750;
            this.y = 355;          
            
        }        

        draw(): void {

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(this.x - 3, this.y + 10, this.radius, this.winkel, 2 * Math.PI);
        inhalt.fillStyle = "red";
        inhalt.fill();
        inhalt.closePath();

        inhalt.moveTo(0, 0);
        inhalt.beginPath();
        inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
        inhalt.fillStyle = "red";
        inhalt.fill();
        inhalt.closePath();
        
            inhalt.beginPath();
            inhalt.fillStyle = " red ";
            inhalt.strokeStyle = "red";
            inhalt.moveTo(this.x, this.y);
            inhalt.lineTo(this.x - 15, this.y + 15);
            inhalt.lineTo(this.x - 15, this.y - 15);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();        


    }//ende drawHeart
