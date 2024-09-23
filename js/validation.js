let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let address = document.getElementById("address");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zip = document.getElementById("zip");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let fields = [firstName, lastName, address, city, state, zip, phone, email];

let myForm = document.getElementById("register-form");

function setInvalid(field, msg) {
    field.classList.add("invalid");
    field.classList.remove("valid");

    let errorMsg = document.querySelector(`#${field.id}+.error-msg`);
    errorMsg.innerText = msg;
    errorMsg.style.display = "block";
}

function setValid(field) {
    field.classList.add("valid");
    field.classList.remove("invalid");
    let errorMsg = document.querySelector(`#${field.id}+.error-msg`);
    errorMsg.style.display = "none";
}

function displayThanks() {
    let thankYou = document.getElementById("thank-you-msg");
    let registerForm = document.getElementById("form-container");
    registerForm.style.display = "none";
    thankYou.style.display = "block";
}

function initValidation() {
    for (let field of fields) {
        field.addEventListener("change", function() {
            if (!field.checkValidity()) {
                if (field === firstName) {
                    if (firstName.value === "") {
                        setInvalid(field, "First name must not be empty.");
                    }
                }
                else if (field === lastName) {
                    if (lastName.value === "") {
                        setInvalid(field, "Last name must not be empty.");
                    }
                }
                else if (field === address) {
                    if (address.value === "") {
                        setInvalid(field, "Address must not be empty.");
                    }
                }
                else if (field === city) {
                    if (city.value === "") {
                        setInvalid(field, "City must not be empty.");
                    }
                }
                else if (field === state) {
                    if (state.value === "") {
                        setInvalid(field, "State must not be empty.");
                    }
                }
                else if (field === zip) {
                    if (zip.value === "") {
                        setInvalid(field, "Zip code must not be empty.");
                    } else {
                        setInvalid(field, "Zip code must be a 5-digit.")
                    }
                }
                else if (field === phone) {
                    if (phone.value === "") {
                        setInvalid(field, "Phone must not be empty.");
                    } else {
                        setInvalid(field, "Phone number must be a 10-digit.")
                    }
                }
                else if (field === email) {
                    if (email.value === "") {
                        setInvalid(field, "Email must not be empty.");
                    } else {
                        setInvalid(field, "Email must be in the form of name@example.com.")
                    }
                }
            }
            else {
                if (field === state) {
                    let stateAbbreviations = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
                        'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
                        'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI',
                        'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
                    if (!stateAbbreviations.includes(field.value.toUpperCase())) {
                        setInvalid(field, "Invalid state abbreviation.");
                    } else {
                        setValid(field);
                    }
                } else {
                    setValid(field);
                }
            }
        });
    }
}


function isValid() {
    let invalidFields = document.querySelectorAll(".invalid");
    return invalidFields.length === 0;
}

document.addEventListener("DOMContentLoaded", function(event) {
    initValidation();
});

myForm.addEventListener("submit", function(event){
    initValidation();
    myForm.classList.remove("invalid");
    if (!isValid()) {
        event.preventDefault();
    }
    else {
        let checkBoxes = document.querySelector("input[type=checkbox]:checked");
        if (checkBoxes === null) {
            event.preventDefault();
            document.querySelector(".marketing-options+.error-msg").style.display="block";
        }
        else {
            event.preventDefault()
            displayThanks();
        }
    }
});

