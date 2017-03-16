document.addEventListener('DOMContentLoaded', function () {
    var person: string;
    person = prompt("Gib hier deinen Namen ein.");
    if (person != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Guten Tag und willkommen auf Nadias Seite " + person;
    }
});
