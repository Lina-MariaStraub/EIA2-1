namespace Love {

    window.addEventListener("load", init);

    export let inhalt: CanvasRenderingContext2D;
    let imgData: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        inhalt = canvas.getContext("2d");
        
        let bigHeart : Heart = new Heart(750, 355, 10, 0);
        
        
//        imgData = inhalt.getImageData(0, 0, canvas.width, canvas.height);        
//      window.setTimeout(animate, 20);
        
        
}//ende init
    
   
    
    
    }//ende namespace
