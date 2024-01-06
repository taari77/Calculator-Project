import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
function welcome() {
    let animation = chalkAnimation.karaoke(`
    Hey! get ready for magic with our calculator.
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
function addition(num1, num2) {
    console.log(chalk.bgGreen(`------> ${num1} + ${num2} = ${num1 + num2}`));
}
function subtraction(num1, num2) {
    console.log(chalk.bgGreen(`------> ${num1} - ${num2} = ${num1 - num2}`));
}
function multiplication(num1, num2) {
    console.log(chalk.bgGreen(`------> ${num1} x ${num2} = ${num1 * num2}`));
}
function division(num1, num2) {
    console.log(chalk.bgGreen(`------> ${num1} / ${num2} = ${num1 / num2}`));
}
function power(num1, num2) {
    console.log(chalk.bgGreen(`------> ${num1} ^ ${num2} = ${num1 ** num2}`));
}
async function askquestion() {
    const choices = ["+ addition", "-subtraction", "x multiplication", "/division", "^ power", "Exit"];
    while (true) {
        const operator = await inquirer.prompt([
            {
                name: "SelectedOperator",
                type: "List",
                message: "Which operator do you want to perform?",
                choices: choices
            }
        ]);
        if (operator.SelectedOperator == choices[5]) {
            let endingAnimation = chalkAnimation.karaoke("Thank you for using the magical calculator");
            setTimeout(() => {
                endingAnimation.stop();
            }, 3000);
            break;
        }
        else {
            const input = await inquirer.prompt([
                {
                    name: "number1",
                    type: "number",
                    message: "Enter number1"
                },
                {
                    name: "number2",
                    type: "number",
                    message: "Enter number2"
                }
            ]);
            if (!isNaN(input.number1) || !isNaN(input.number2)) {
                switch (operator.SelectedOperator) {
                    case "+ addition":
                        addition(input.number1, input.number2);
                        break;
                    case "- subtraction":
                        subtraction(input.number1, input.number2);
                        break;
                    case "x multiplication":
                        multiplication(input.number1, input.number2);
                        break;
                    case "/ division":
                        division(input.number1, input.number2);
                        break;
                    case "^ power":
                        power(input.number1, input.number2);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    welcome();
}
