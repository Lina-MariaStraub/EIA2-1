document.addEventListener('DOMContentLoaded', function () {
    var person;
    person = prompt("Gib hier deinen Namen ein.");
    if (person != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Guten Tag und willkommen auf Nadias Seite " + name;
    }
});
