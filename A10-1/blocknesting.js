document.write("Get ready for some repeated text.<br>");
for (let count = 1; count < 11; count++) {
    document.write(count + ". I am part of a loop!<br>");
    for (let nestcount = 1; nestcount < 3; nestcount++) {
        document.write("I keep interrupting in pairs!<br>");
    }
}
document.write("Now we are back to the plain text.");