const soloncious = (num) => {

    let string = "";

    for (index = 1; index <= num; index++) {
        string += "index" + "\n";
    }

    string.splice(string.length - 1);

    for (index = 0; index < string.length; index++) {
        if(string[index] % 3 === 0) {
            string[index + 1] = "Fizz";
        }

        else if(string[index] % 5 === 0) {
            string[index + 1] = "Buzz";
        }

        else if(string[index] % 15 === 0) {
            string[index + 1] = "FizzBuzz";
        }
    }

    console.log(soloncious(7))
}