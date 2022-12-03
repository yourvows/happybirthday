//main pass
function op() {
    let correctPass = document.getElementById("password").value;
    if (correctPass == 'случайности'|| correctPass == 'Случайности' || correctPass == 1)
        document.location = "./assets/pages/second.html";
    else {
        alert(404)
    }
}
//pass 3
function third() {
    let correctPass = document.getElementById("password3").value;
    console.log(correctPass);
    if (correctPass == 'твори' || correctPass == 'Твори' || correctPass == 1) {
        console.log(123);
        document.location = "../pages/fourth.html";
    }
    else {
        alert(404)
    }
}
//pass 4
function fourth() {
    let correctPass = document.getElementById("password4").value;
    console.log(correctPass);
    if (correctPass == 'крылья' || correctPass == 'Крылья' || correctPass == 1) {
        console.log(123);
        document.location = "../pages/fifth.html";
    }
    else {
        alert(404)
    }
}
//pass 5
function fifth() {
    let correctPass = document.getElementById("password5").value;
    console.log(correctPass);
    if (correctPass == 'люби' || correctPass == 'Люби' || correctPass == 1) {
        console.log(123);
        document.location = "../pages/sixth.html";
    }
    else {
        alert(404)
    }
}
//pass 6
function sixth() {
    let correctPass = document.getElementById("password6").value;
    console.log(correctPass);
    if (correctPass == 'истинная красота' || correctPass == 'Истинная красота' || correctPass == 1) {
        console.log(123);
        document.location = "../pages/seventh.html";
    }
    else {
        alert(404)
    }
}
