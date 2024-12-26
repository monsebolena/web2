var inputPass = document.getElementById("password");
var inputRePass = document.getElementById("repassword");
var btnCrear = document.getElementById("btnCrear");

inputPass.oninput = function() {
    var txtPass = inputPass.value;
    var txtRepass = inputRePass.value;

    if (txtPass === txtRepass && txtPass !== "") {
        btnCrear.disabled = false;
    } else {
        btnCrear.disabled = true;
    }
    console.log(txtPass);
};

inputRePass.oninput = function() {
    var txtPass = inputPass.value;
    var txtRepass = inputRePass.value;

    if (txtPass === txtRepass && txtPass !== "") {
        btnCrear.disabled = false;
    } else {
        btnCrear.disabled = true;
    }
    console.log(txtRepass);
};
