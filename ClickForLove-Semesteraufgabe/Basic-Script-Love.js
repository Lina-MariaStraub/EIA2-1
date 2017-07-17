var Love;
(function (Love) {
    window.addEventListener("load", init);
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Love.inhalt = canvas.getContext("2d");
        drawHeart(750, 355, 10, 0);
        //        imgData = inhalt.getImageData(0, 0, canvas.width, canvas.height);        
        //      window.setTimeout(animate, 20);
    } //ende init
    function drawHeart(_x, _y, _radius, _winkel) {
        Love.inhalt.moveTo(0, 0);
        Love.inhalt.beginPath();
        Love.inhalt.arc(this.x - 3, this.y + 10, this.radius, this.winkel, 2 * Math.PI);
        Love.inhalt.fillStyle = "red";
        Love.inhalt.fill();
        Love.inhalt.closePath();
        Love.inhalt.moveTo(0, 0);
        Love.inhalt.beginPath();
        Love.inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
        Love.inhalt.fillStyle = "red";
        Love.inhalt.fill();
        Love.inhalt.closePath();
        Love.inhalt.beginPath();
        Love.inhalt.fillStyle = " red ";
        Love.inhalt.strokeStyle = "red";
        Love.inhalt.moveTo(this.x, this.y);
        Love.inhalt.lineTo(this.x - 15, this.y + 15);
        Love.inhalt.lineTo(this.x - 15, this.y - 15);
        Love.inhalt.closePath();
        Love.inhalt.fill();
        Love.inhalt.stroke();
    } //ende drawHeart
})(Love || (Love = {})); //ende namespace
//# sourceMappingURL=Basic-Script-Love.js.map