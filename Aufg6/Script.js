var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        //    let probeStr: string = "254307, Credidio, Nadia, 20, super humorvoll";
        //    let strArr: string[] = probeStr.split(",");
        //
        //    let student: StudentData = {
        //        matrikel: parseInt(strArr[0]),
        //        nName: strArr[1],
        //        vName: strArr[2],
        //        alter: parseInt(strArr[3]),
        //        geschlecht: parseInt(strArr[4]) == 1,
        //        kommentar: strArr[5]
        //    };
        return "Hier fehlt noch der richtige Code...";
    }
    function queryData(_matrikel) {
        return "Hier fehlt noch der richtige Code...";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Script.js.map