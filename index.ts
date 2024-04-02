#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let condition = true;
console.log(
  chalk.blue.bold(
    "\n\t WELCOME TO YOUR TODO LIST, What is in your mind today? \n "
  )
);

while (condition) {
  let task = await inquirer.prompt([
    {
      name: "Task",
      type: "input",
      message: chalk.green.bold("What is your new task?"),
    },
  ]);
  todoList.push(task.Task);
  console.log(chalk.gray("\n Your task is to :", task.Task));

  let moreTask = await inquirer.prompt([
    {
      name: "addmore",
      type: "confirm",
      message: chalk.red.bold("Would you like to add another task?"),
      default: "False",
    },
  ]);
  condition = moreTask.addmore;
}

console.log(chalk.yellow.bold("\n This is your Todos : "));
console.log(todoList);
