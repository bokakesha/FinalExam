let form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    let errors = {};

    /**
     * @return {boolean}
     */
    function HasNumber(myString) {
        return /\d/.test(myString);
    }

    /**
     * @return {boolean}
     */
    function IsEmpty(string) {
        return string.length === 0
    }

    //firstName and LastName
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    if (HasNumber(firstName) || IsEmpty(firstName)) {
        errors.firstName = 'Invalid name';
    }
    if (HasNumber(lastName) || IsEmpty(lastName)) {
        errors.lastName = 'Invalid lastname';
    }

    //email

    /**
     * @return {boolean}
     */
    function ValidateEmail(email) {

        let regex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        //var address = document.getElementById[email].value;
        if (regex.test(email) === false)
        {return false;
        }
    }
    let email = document.querySelector('#email').value;
    if (ValidateEmail(email) || IsEmpty(email)) {
        errors.email = 'Invalid email';
    }

    //passwords
    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirm-password').value;

    if (password.length < 6 ||  IsEmpty(password)) {
        errors.password = 'Invalid Password';
    }
    if (password !== confirmPassword ||  IsEmpty(confirmPassword)) {
        errors.confirmPassword = 'Passwords do not match';
    }

    //Checkbox
    let checkbox = form.querySelector('#checkbox').checked;
    if (!checkbox ||  IsEmpty(checkbox)) {
        errors.checkbox = 'You must agree terms and conditions';
    }

    // Errors
    form.querySelectorAll('.error-div').forEach((item) => {
        item.textContent = ' ';
    });
    for (let name in errors) {
        let errorPlaceholder = document.getElementById('error_' + name);
        if (errorPlaceholder) {
            errorPlaceholder.textContent = errors[name];
        }
    }

    if (!(Object.keys(errors).length === 0)) {
        event.preventDefault();
    }
});