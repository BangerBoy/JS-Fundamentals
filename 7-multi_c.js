const args = process.argv.slice(2);
const firstArg = args[0];
const x = parseInt(firstArg);
if (isNaN(x)){
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < x; i++){
        console.log("C is fun");
    }
}