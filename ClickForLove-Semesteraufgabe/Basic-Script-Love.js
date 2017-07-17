var Love;
(function (Love) {
    window.addEventListener("load", init);
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Love.inhalt = canvas.getContext("2d");
        let bigHeart = new Love.Heart(750, 355, 10, 0);
        //        imgData = inhalt.getImageData(0, 0, canvas.width, canvas.height);        
        //      window.setTimeout(animate, 20);
    } //ende init
})(Love || (Love = {})); //ende namespace
//# sourceMappingURL=Basic-Script-Love.js.map