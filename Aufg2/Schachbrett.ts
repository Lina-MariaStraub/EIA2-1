document.addEventListener('DOMContentLoaded', function() {

    let zeile: number = 0;
    let reis: number = 1;
    let element: HTMLElement;

    for (let i: number = 0; i < 64; i++) {
        element = document.createElement("div");

        if (((i + zeile) % 2) == 0) {
            element.className = "feld weiss";
        }

        else {
            element.className = "feld schwarz";
        }


        if (((i + 1) % 8) == 0) {
            zeile++;
        }



        element.innerText = "" + reis;
        reis = reis * 2;
        document.body.appendChild(element);
    }




});
