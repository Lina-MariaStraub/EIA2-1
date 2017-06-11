namespace FormElements {
    window.addEventListener("load", init);

    //Array aller Eissorten
    let sorten: string[] = ["Peachpuff", "UnicornSwirls", "Schokolade", "Kinderschokolade",
        "Kastanie", "Zitronensorbe", "Yogurt-Kirsch", "Blaubeere", "Haselnuss"];
    let inputsSorten: HTMLInputElement[] = [];

    //Array aller Zusaetze
    let extras: string[] = ["Schoko", "Erdbeer", "Karamell", "Waldfrucht", "Kiwi", "Sahne"];
    let inputsExtras: HTMLInputElement[] = [];

    //Array aller Darreichungsformen
    let behaelter: string[] = ["Waffel", "Becher"];
    let inputsBehaeltnis: HTMLInputElement[] = [];

    //HTMLElemente kreieren
    let behaeltnis: HTMLElement;
    let eis: HTMLElement;
    let extra: HTMLElement;
    let uebersichtDerBestellung: HTMLElement;
    let bestellungAufgeben: HTMLElement;


    function init(): void {
        eis = document.getElementById("Sorten"); 
        eis.addEventListener("change", change);

        extra = document.getElementById("Extras");
        extra.addEventListener("change", change);

        behaeltnis = document.getElementById("Behaelter");
        behaeltnis.addEventListener("change", change);

        uebersichtDerBestellung = document.getElementById("UebersichtDerBestellung");

        bestellungAufgeben = document.getElementById("BestellungAbschicken");
        bestellungAufgeben.addEventListener("click", BestellungPruefen);

        createEis();
        createExtras();
        createBehaelter();
    }


    //Input Eisssorten kreieren
    function createEis(): void {
        for (let i: number = 0; i < sorten.length; i++) {
            createInput(sorten[i]);
        }
    }
    function createInput(_sorte: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _sorte;
        label.appendChild(input);
        input.type = "number"; //Art des Inputs
        input.min = "0";
        input.max = "20";
        input.value = "0";
        label.id = _sorte;
        eis.appendChild(label);
        inputsSorten.push(input);
    }

    //Input Zusaetze kreieren
    function createExtras(): void {
        for (let i: number = 0; i < extras.length; i++) {
            createCheckbox(extras[i]);
        }
    }
    function createCheckbox(_Checkboxen: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _Checkboxen;
        label.appendChild(input);
        input.type = "checkbox"; //Art des Inputs
        label.id = _Checkboxen;
        extra.appendChild(label);
        inputsExtras.push(input);
    }

    //Input Darreichungsform kreieren
    function createBehaelter(): void {
        for (let i: number = 0; i < behaelter.length; i++) {
            createRadio(behaelter[i]);
        }
    }
    function createRadio(_Radiobutton: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _Radiobutton;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "Radiobutton";
        label.id = _Radiobutton;
        behaeltnis.appendChild(label);
        inputsBehaeltnis.push(input);
    }


    //Zeigt ausgewählte Produkte mit ihren Preisen in der Bestellübersicht an
    function aendereUebersicht(_summe: number): void {
        let bestellungsUebersicht: HTMLElement = document.getElementById("Warenuebersicht");
        bestellungsUebersicht.innerText = "";

        for (let i: number = 0; i < inputsSorten.length; i++) {
            if (parseInt(inputsSorten[i].value) > 0) {
                bestellungsUebersicht.innerText += sorten[i] + " " + (parseInt(inputsSorten[i].value) * 1) + " €" + "\n";
            }
        }

        for (let i: number = 0; i < inputsExtras.length; i++) {
            if (inputsExtras[i].checked) {
                bestellungsUebersicht.innerText += extras[i] + " 0.30 €" + "\n";
            }
        }

        for (let i: number = 0; i < inputsBehaeltnis.length; i++) {
            if (inputsBehaeltnis[i].checked) {
                bestellungsUebersicht.innerText += behaelter[i] + "\n";
            }
        }

        //Summe wird in HTML geschrieben
        let summeHtml: HTMLElement = document.getElementById("Summe");
        summeHtml.innerText = _summe.toString() + " Euro";
    }


    function change(): void {
        let summe: number = 0;
        for (let i: number = 0; i < inputsSorten.length; i++) {
            summe += parseInt(inputsSorten[i].value); 
        }
        for (let i: number = 0; i < inputsExtras.length; i++) {
            if (inputsExtras[i].checked) 
            summe += 0.30;
        }
        aendereUebersicht(summe);
    }


    //Bestellung wird auf Vollstaendigkeit und Richtigkeit ueberprueft
    function BestellungPruefen(): void {
        let kontrolle: string[] = ["Bitte folgende Eingaben ueberpruefen! \n"];

        //Name
        let nachname: HTMLInputElement = <HTMLInputElement>document.getElementById("Nachname");
        if (nachname.validity.valid == false) {
            kontrolle.push("Name \n");
            nachname.style.backgroundColor = "#FA5858";
        }
        else {
            nachname.style.backgroundColor = "white";
        }

        //Vorname
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("Vorname");
        if (vorname.validity.valid == false) {
            kontrolle.push("Vorname \n");
            vorname.style.backgroundColor = "#FA5858";
        }
        else {
            vorname.style.backgroundColor = "white";
        }

        //Straße
        let strasse: HTMLInputElement = <HTMLInputElement>document.getElementById("Strasse");
        if (strasse.validity.valid == false) {
            kontrolle.push("Strasse \n");
            strasse.style.backgroundColor = "#FA5858";
        }
        else {
            strasse.style.backgroundColor = "white";
        }

        //Ort, PLZ
        let ortUndPostleitzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("Ort,PLZ");
        if (ortUndPostleitzahl.validity.valid == false) {
            kontrolle.push("Ort, PLZ \n");
            ortUndPostleitzahl.style.backgroundColor = "#FA5858";
        }
        else {
            ortUndPostleitzahl.style.backgroundColor = "white";
        }

        //Email
        let eMail: HTMLInputElement = <HTMLInputElement>document.getElementById("Email");
        if (eMail.validity.valid == false) {
            kontrolle.push("Email \n");
            eMail.style.backgroundColor = "#FA5858";
        }
        else {
            eMail.style.backgroundColor = "white";
        }


        let eiskugeln: number = 0;
        for (let i: number = 0; i < inputsSorten.length; i++) {
            if (parseInt(inputsSorten[i].value) > 0)
                eiskugeln += 1;
        }
        if (eiskugeln == 0)
            kontrolle.push("sorten\n");


        let extras: number = 0;
        for (let i: number = 0; i < inputsExtras.length; i++) {
            if (inputsExtras[i].checked)
                extras += 1;
        }
        if (extras == 0)
            kontrolle.push("extra\n");


        let behaeltnis: number = 0;
        for (let i: number = 0; i < inputsBehaeltnis.length; i++) {
            if (inputsBehaeltnis[i].checked)
                behaeltnis += 1;
        }
        if (behaeltnis == 0)
            kontrolle.push("behaelter");

        if (kontrolle.length > 0) {
            for (let i: number = 0; i < kontrolle.length; i++)
                kontrolle.push;
            alert(kontrolle.join(""));
        }
        else {
            alert("Vielen Dank fuer Ihre Bestellung! :)");
        }
    }
}