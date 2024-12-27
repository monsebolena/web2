var checkTerms = document.getElementById("terminos");

checkTerms.onclick = function() {
    // Aquí puedes agregar alguna lógica, como habilitar o deshabilitar el botón de envío
    var submitButton = document.querySelector("button[type='submit']");
    
    // Si el checkbox está marcado, habilitar el botón de envío
    if (checkTerms.checked) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};
