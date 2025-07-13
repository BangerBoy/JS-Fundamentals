const args = process.argv.slice(2);
const firstArg = args[0];
const convertedInt = parseInt(firstArg);
if (isNaN(convertedInt)){
    console.log("Not a number");
} else {
    console.log(`My number: ${convertedInt}`);
}