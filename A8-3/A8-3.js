function stepOne() {
    let firstString = "I love Paris in the springtime, " + "<br>";
    let secondString = "I love Paris in the fall." + "<br>";
    document.write(firstString + secondString);
}

function stepTwo() {
    stepOne();
    setTimeout(() => {window.alert("But I love Arizona most of all.");}, 450); //used setTimeout() to delay the alert until after stepOne() has populated the browser. 
}

stepTwo();