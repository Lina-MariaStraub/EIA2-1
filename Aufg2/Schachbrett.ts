document.addEventListener('DOMContentLoaded', function() {

    let element: HTMLElement;

    for (let i: number = 0; i < 64; i++) {
        element = document.createElement("div");

        if (i % 2 == 0) {
            element.className = "feld white";
        }

        else {
            element.className = "feld black";
        }


        let reis: number = 1;
        element.innerText = "" + reis;
        reis *= 2;
        document.body.appendChild(element);
    }

    
    
    
//    let rice: number = 1;
//    element.innerText = "" + rice;//    rice *= 2;
//    document.body.appendChild(element);

});