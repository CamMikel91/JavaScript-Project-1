function hashtagSquare(rows, columns) {
    for (let i = rows; i > 0; i--) {
        for (let j = columns; j > 0; j--) {
            document.write("#");
        }
        document.write("<br>");
    }
}

let rows = window.prompt("Enter number of rows:", ""),
    columns = window.prompt("Enter number of columns:", "");

hashtagSquare(rows, columns);