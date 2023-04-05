#!/usr/bin/env node


        /// ::: CHALK ::: ///

import chalk from "chalk"
import prompt from "prompt"

prompt.start();

    prompt.get(
        [{
        name : "message", 
        message : "What is your message"
        },
        {
        name : "color",
        message : "What color do you chose"
        }], (err, result) => {

        try {
            const message = result.message ; 
            const color = result.color
            /// DOESNT WORK 
            /*
            const command = `chalk.${color}(${message})`
            eval(console.log(command))
            */
            console.log(chalk.blue(message))
        }

        catch {
            throw new Error (err)
        }
    }
);
