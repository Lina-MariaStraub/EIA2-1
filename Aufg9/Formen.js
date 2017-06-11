//In zusammenarbeit mit Sara Kalinic.//
var OnlineEisdealer;
(function (OnlineEisdealer) {
    window.addEventListener("load", init);
    let becher;
    let iceCream;
    let sosse;
    let topping;
    let overview;
    let button;
    let flavors = ["Peachpuff", "UnicornSwirls", "Schokolade", "Kinderschokolade",
        "Kastanie", "Zitronensorbe", "Yogurt-Kirsch", "Blaubeere", "Haselnuss"];
    let sauces = ["Schoko", "Erdbeer", "Karamell", "Waldfrucht", "Kiwi", "Sahne"];
    //    let toppings: string[] = ["Haselüsse", "Smarties", "Kokusflocken", "Trockene Erdbeeren", "Bunte Streusel"];
    let cone = ["Waffel", "Becher"];
    let inputSauces = [];
    let inputFlavors = [];
    let inputToppings = [];
    let inputCone = [];
    function init() {
        iceCream = document.getElementById("flavors");
        iceCream.addEventListener("change", change);
        sosse = document.getElementById("sauces");
        sosse.addEventListener("change", change);
        //        topping = document.getElementById("toppings"); 
        //        topping.addEventListener("change", change);
        becher = document.getElementById("cone");
        becher.addEventListener("change", change);
        overview = document.getElementById("overview");
        button = document.getElementById("sendOrder");
        button.addEventListener("click", checkOrder);
        createFlavors();
        createSauces();
        //        createToppings(); 
        createCone();
    }
    function createFlavors() {
        for (let i = 0; i < flavors.length; i++) {
            createInput(flavors[i]);
        }
    }
    function createInput(_flavors) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _flavors;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "10";
        input.value = "0";
        label.id = _flavors;
        iceCream.appendChild(label);
        inputFlavors.push(input);
    }
    function createSauces() {
        for (let i = 0; i < sauces.length; i++) {
            createCheckbox(sauces[i]);
        }
    }
    function createCheckbox(_Checkboxen) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _Checkboxen;
        label.appendChild(input);
        input.type = "checkbox";
        label.id = _Checkboxen;
        sosse.appendChild(label);
        inputSauces.push(input);
    }
    //    function createToppings(): void {
    //        for (let i: number = 0; i < toppings.length; i++) {
    //            createCheckboxT(toppings[i]);
    //        }
    //    }
    //    function createCheckboxT(_Checkboxen: string): void {
    //        let label: HTMLLabelElement = document.createElement("label");
    //        let input: HTMLInputElement = document.createElement("input");
    //        label.innerText = _Checkboxen;
    //        label.appendChild(input);
    //        input.type = "checkbox"; 
    //        label.id = _Checkboxen;
    //        topping.appendChild(label);
    //        inputToppings.push(input);
    //    }
    function createCone() {
        for (let i = 0; i < cone.length; i++) {
            createRadio(cone[i]);
        }
    }
    function createRadio(_Radiobutton) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _Radiobutton;
        label.appendChild(input);
        input.type = "radio";
        input.name = "Radiobutton";
        label.id = _Radiobutton;
        becher.appendChild(label);
        inputCone.push(input);
    }
    function changeDelivery(_sum) {
        let overview = document.getElementById("delivery");
        overview.innerText = "";
        for (let i = 0; i < inputFlavors.length; i++) {
            if (parseInt(inputFlavors[i].value) > 0) {
                overview.innerText += flavors[i] + " " + (parseInt(inputFlavors[i].value) * 1) + "Euro" + "\n";
            }
        }
        for (let i = 0; i < inputSauces.length; i++) {
            if (inputSauces[i].checked) {
                overview.innerText += sauces[i] + " 0.20 Euro" + "\n";
            }
        }
        //        for (let i: number = 0; i < inputToppings.length; i++) {
        //            if (inputToppings[i].checked) {
        //                overview.innerText += toppings[i] + " 0.50 Euro" + "\n";
        //            }
        //        }
        for (let i = 0; i < inputCone.length; i++) {
            if (inputCone[i].checked) {
                overview.innerText += cone[i] + "\n";
            }
        }
        let sumHtml = document.getElementById("sum");
        sumHtml.innerText = _sum.toString() + " Euro";
    }
    function change() {
        let sum = 0;
        for (let i = 0; i < inputFlavors.length; i++) {
            sum += parseInt(inputFlavors[i].value);
        }
        for (let i = 0; i < inputSauces.length; i++) {
            if (inputSauces[i].checked)
                sum += 0.20;
        }
        //        for (let i: number = 0; i < inputToppings.length; i++) {
        //            if (inputToppings[i].checked) 
        //            sum += 0.50;
        //        }
        changeDelivery(sum);
    }
    function checkOrder() {
        let check = ["Bitte folgende Eingaben ueberpruefen! \n"];
        let surname = document.getElementById("surname");
        if (surname.validity.valid == false) {
            check.push("Surname \n");
            surname.style.backgroundColor = "#FA5858";
        }
        else {
            surname.style.backgroundColor = "white";
        }
        let name = document.getElementById("name");
        if (name.validity.valid == false) {
            check.push("Name \n");
            name.style.backgroundColor = "#FA5858";
        }
        else {
            name.style.backgroundColor = "white";
        }
        let street = document.getElementById("street");
        if (street.validity.valid == false) {
            check.push("Street \n");
            street.style.backgroundColor = "#FA5858";
        }
        else {
            street.style.backgroundColor = "white";
        }
        let cityPostcode = document.getElementById("city,postcode");
        if (cityPostcode.validity.valid == false) {
            check.push("City, Postcode \n");
            cityPostcode.style.backgroundColor = "#FA5858";
        }
        else {
            cityPostcode.style.backgroundColor = "white";
        }
        let mail = document.getElementById("Email");
        if (mail.validity.valid == false) {
            check.push("Email \n");
            mail.style.backgroundColor = "#FA5858";
        }
        else {
            mail.style.backgroundColor = "white";
        }
        let flavors = 0;
        for (let i = 0; i < inputFlavors.length; i++) {
            if (parseInt(inputFlavors[i].value) > 0)
                flavors += 1;
        }
        if (flavors == 0)
            check.push("Flavors\n");
        let sauces = 0;
        for (let i = 0; i < inputSauces.length; i++) {
            if (inputSauces[i].checked)
                sauces += 1;
        }
        if (sauces == 0)
            check.push("Sauces \n");
        //        let toppings: number = 0;
        //        for (let i: number = 0; i < inputToppings.length; i++) {
        //            if (inputToppings[i].checked)
        //                toppings += 1;
        //        }
        //        if (toppings == 0)
        //            check.push("Toppings \n");
        //        
        let cone = 0;
        for (let i = 0; i < inputCone.length; i++) {
            if (inputCone[i].checked)
                cone += 1;
        }
        if (cone == 0)
            check.push("Cone");
        if (check.length > 0) {
            for (let i = 0; i < check.length; i++)
                check.push("");
            alert(check.join(""));
        }
        else {
            alert("Thank you for ordering! :)");
        }
    }
})(OnlineEisdealer || (OnlineEisdealer = {}));
//# sourceMappingURL=Formen.js.map