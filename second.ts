import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

function welcome() {
    let animation = chalkAnimation.karaoke(`
    Hey! Get ready for magic with our calculator.
    xD
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
         
    `);

    setTimeout(() => {
        animation.stop();
    }, 3000);
}

function performOperation(operator, num1, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "^":
            return num1 ** num2;
        default:
            return NaN;
    }
}

async function askQuestion() {
    const choices = ["+", "-", "x", "/", "^", "Exit"];

    while (true) {
        const operator = await inquirer.prompt([
            {
                name: "selectedOperator",
                type: "list",
                message: "Which operator do you want to perform?",
                choices: choices,
            },
        ]);

        if (operator.selectedOperator === "Exit") {
            let endingAnimation = chalkAnimation.karaoke("Thank you for using the magical calculator");
            setTimeout(() => {
                endingAnimation.stop();
            }, 3000);
            break;
        } else {
            const input = await inquirer.prompt([
                {
                    name: "number1",
                    type: "number",
                    message: "Enter number1",
                },
                {
                    name: "number2",
                    type: "number",
                    message: "Enter number2",
                },
            ]);

            if (!isNaN(input.number1) && !isNaN(input.number2)) {
                const result = performOperation(operator.selectedOperator, input.number1, input.number2);

                if (!isNaN(result)) {
                    console.log(chalk.bgGreen(`------> ${input.number1} ${operator.selectedOperator} ${input.number2} = ${result}`));
                } else {
                    console.log(chalk.bgRed("Invalid operator. Please try again."));
                }
            } else {
                console.log(chalk.bgRed("Invalid input. Please enter valid numbers."));
            }
        }
    }
}

welcome();
askQuestion();
