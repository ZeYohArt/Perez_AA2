var x = 2;
do {
    if (x < 50){
        document.writeln(x + ", ");
        x = x + 2;
    } else if (x == 50){
        document.writeln(x + "<br>");
        x = x + 2;
    }
} while (x <= 50);
