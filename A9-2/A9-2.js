let firstName = "Cameron";
let lastName = "Mikel";

document.write("<h1>Name Length Checker</h1><br>" + `<p style="margin-bottom: 20px;">First Name: ${firstName} <br> Last Name: ${lastName}</p>`);

if (firstName.length < lastName.length) {
    document.write("Your last name is longer.");
}
else {
    document.write(`<p style="font-weight: bold;">Your first name is longer.</p>`)
}