let pins = {};

function pin(id) {

    console.log(id);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            pins = JSON.parse(this.responseText);
            console.log(pins);
            checkPins();
        }
    };

    xhttp.open("GET", "/pin/" + id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("JSON");
}

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

        pins = JSON.parse(this.responseText);
        console.log(pins);
        checkPins();
    }
};

xhttp.open("GET", "/pins", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send("JSON");

function checkPins() {

    for (let id in pins) {
        if (pins[id] === 1)
            document.getElementById(id).classList.add('active');
        else
            document.getElementById(id).classList.remove('active');
    }
}
