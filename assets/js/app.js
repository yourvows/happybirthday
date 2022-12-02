//main pass
function op() {
    let correctPass = document.getElementById("password").value;
    if (correctPass == 'случайности'|| correctPass == 'Случайности')
        document.location = "./assets/pages/second.html";
    else {
        alert(404)
    }
}
//pass 3
function third() {
    let correctPass = document.getElementById("password3").value;
    console.log(correctPass);
    if (correctPass == 'твори' || correctPass == 'Твори') {
        console.log(123);
        document.location = "../pages/second.html";
    }
    else {
        alert(404)
    }
}
