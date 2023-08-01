function tempAvg() {
    // prompt to ask how many temperatures to expect and declares empty temps array.
    let count = window.prompt("How many temperatures would you like to average?", "");
    let temps = [];

    // prompts to collect temperatures (one at a time) and stores them in the "temps" array.
    for (let i = 1; i <= count; i++) {       
        let currentTemp = window.prompt("Enter temp (one temp per prompt)", "");
        currentTemp = parseInt(currentTemp); 
        temps.push(currentTemp);        
    }
    
    // display number of temps to average on html.
    document.write(`There are ${temps.length} temperatures to average.<br>`);

    // loop to display each temp on a new line.
    for (let i = 0; i < temps.length; i++) {
        document.write(temps[i] + "<br>");
    }
    
    // calculates average of temps and displays the average on html.
    function addFunc(totalTemp, nextTemp) {
        return totalTemp + nextTemp;
    }
    let average = temps.reduce(addFunc) / temps.length;
    document.write("The average of your temperatures is: " + average);
}

// function call.
tempAvg();