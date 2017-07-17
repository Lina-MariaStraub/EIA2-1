namespace Love {

    window.addEventListener("load", init);

    export let inhalt: CanvasRenderingContext2D;
    let imgData: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        inhalt = canvas.getContext("2d");
        
        drawHeart(750, 355, 10, 0);
        
        
//        imgData = inhalt.getImageData(0, 0, canvas.width, canvas.height);        
//      window.setTimeout(animate, 20);
        
        
}//ende init
    
    function drawHeart(_x: number, _y: number, _radius: number, _winkel: number): void {


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
       
    
    
    }//ende namespace
