document.addEventListener('DOMContentLoaded', function () {
    let kartenSammlung = ['Pik 7', 'Pik 8', 'Pik 9',
        'Pik 10', 'Pik Bube', 'Pik Dame',
        'Pik K�nig', 'Pik As',
        'Kreuz 7', 'Kreuz 8', 'Kreuz 9',
        'Kreuz 10', 'Kreuz Bube', 'Kreuz Dame',
        'Kreuz K�nig', 'Kreuz As',
        'Karo 7', 'Karo 8', 'Karo 9',
        'Karo 10', 'Karo Bube', 'Karo Dame',
        'Karo K�nig', 'Karo As',
        'Herz 7', 'Herz 8', 'Herz 9',
        'Herz 10', 'Herz Bube', 'Herz Dame',
        'Herz K�nig', 'Herz As'];
    //    kartenSammlung.length(); zufallsza   
    document.getElementById("anfang").addEventListener("click", ichmachewas);
    function ichmachewas() {
        let a = kartenSammlung.length - 1;
        let n = Math.floor(Math.random() * a);
        if (kartenSammlung.length > 0) {
            let x = kartenSammlung.splice(n, 1);
            let hand = document.getElementsByClassName("hand");
            if (hand[0].textContent == "") {
                hand[0].textContent = x[0];
                console.log(x[0]);
            }
            else {
                if (hand[1].textContent == "") {
                    hand[1].textContent = x[0];
                    console.log(x[0]);
                }
                else {
                    if (hand[2].textContent == "") {
                        hand[2].textContent = x[0];
                        console.log(x[0]);
                    }
                    else {
                        if (hand[3].textContent == "") {
                            hand[3].textContent = x[0];
                            console.log(x[0]);
                        }
                        else {
                            if (hand[4].textContent == "") {
                                hand[4].textContent = x[0];
                                console.log(x[0]);
                            }
                        }
                    }
                }
            }
        }
    }
});
//# sourceMappingURL=Mau.js.map