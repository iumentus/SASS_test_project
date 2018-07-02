function formValidation(form) {

    var name = form.name.value;
    var lastname = form.lastname.value;
    var message = form.message.value;

    var emptyEr = document.getElementById("emptyError");
    var typeEr = document.getElementById("typeError");
    var shortEr = document.getElementById("shortError");
    var longEr = document.getElementById("longError");

    if (name == "" || lastname == "" || message == "") {
        emptyEr.style.display = 'block';
        return false;
    } else if (!name.match(/^[a-zA-Z_]+$/) || !lastname.match(/^[a-zA-Z_]+$/)) {
        emptyEr.style.display = 'none';
        typeEr.style.display = 'block';
        return false;
    } else if (message.length < 10) {
        emptyEr.style.display = 'none';
        typeEr.style.display = 'none';
        shortEr.style.display = 'block';
        return false;
    } else if (message.length > 200) {
        emptyEr.style.display = 'none';
        typeEr.style.display = 'none';
        shortEr.style.display = 'none';
        longEr.style.display = 'block';
        return false;
    } else {
        return true;
    }
}