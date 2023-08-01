let computer_parts = [
    "Monitors",
    "Motherboards",
    "Chips",
    "Hard Drives",
    "DVD-ROMs",
    "Cases",
    "Power Supplies"
];

function partsDisplay() {
    for (let i = 0; i < computer_parts.length; i++) {
        document.write(computer_parts[i] + "<br>");
    }
}

partsDisplay();