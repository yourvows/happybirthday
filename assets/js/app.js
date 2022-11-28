function op() {
    var correctPass = document.getElementById("password").value;
    if (correctPass == 1)
        document.location = "../pages/second.html";
    else {
        alert("invaild information")
    }
}

function third() {
    var correctPass = document.getElementById("password3").value;
    if (correctPass == 'твори'||'Твори')
    console.log(123);
        // document.location = "../pages/second.html";
    else {
        alert("invaild information")
    }
}
