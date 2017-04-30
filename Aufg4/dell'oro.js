var L4_Canvas;
(function (L4_Canvas) {
    window.addEventListener("load", init);
    let inhalt;
    function init(_event) {
        console.log("Hallo");
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        inhalt = canvas.getContext("2d");
        console.log(inhalt);
        inhalt.fillStyle = "#0000ff";
        inhalt.fillRect(0, 0, canvas.width, canvas.height);
        inhalt.moveTo(0, 0);
        inhalt.lineTo(canvas.width, canvas.height);
        inhalt.stroke();
        drawTriangle(200, 150, "#00ff00", "#ff0000");
    }
    function drawTriangle(_x, _y, _strokeColor, _fillColor) {
        inhalt.beginPath();
        inhalt.fillStyle = _fillColor;
        inhalt.strokeStyle = _strokeColor;
        inhalt.moveTo(_x, _y);
        inhalt.lineTo(_x, _y - 20);
        inhalt.lineTo(_x + 20, _y + 20);
        inhalt.closePath();
        inhalt.fill();
        inhalt.stroke();
        //draw a triangle around the coordinates (_x, _y);
    }
})(L4_Canvas || (L4_Canvas = {}));
//# sourceMappingURL=dell'oro.js.map