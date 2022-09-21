var output = document.getElementById("advice");
var icon = document.getElementById("icon");
var num = document.getElementById("adviceNum");
var adv;
icon.addEventListener("click", function() {

    const advices = new XMLHttpRequest();
    advices.open("GET", "https://api.adviceslip.com/advice");
    advices.send();
    advices.addEventListener("readystatechange", function() {
        if (advices.readyState == 4) {
            adv = JSON.parse(advices.response);

        }
    })
    console.log(adv);
    output.innerHTML = adv.slip.advice;
    num.innerHTML = `advice #${adv.slip.id}`;
})