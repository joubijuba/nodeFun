#!/usr/bin/env node

/// promptt command doesn't work

import prompt from "prompt"

prompt.start();

  prompt.get(

    /// Les paramètres demandés dans le prompt
    [{name : "age", message : "enter your age"}],

    /// CALLBACK : c'est une fonction executée dans une autre fonction
    (err, result) => {
9
        try {
            const age = parseInt(result.age, 10)
            let message 
    
            message = (age >= 0 && age <= 99) ? 
                `You are born in ' + ${(2023 - age)}` : 
                    "please input a number between 0 and 99"
    
            console.log(message)


            /// EQUIVALENT : 
            /*
            if (age >= 0 && age <= 99){
                message = 'You are born in ' + (2023 - age)
            }
            else {
                message =  "please input a number between 0 and 99"
            }
            */
        }

        catch {
            throw new Error (err)
        }
    }
);

