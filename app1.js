import prompt from "prompt"

prompt.start();

  prompt.get(
    [{name : "age", message : "enter your age"}],
    (err, result) => {

        const age = parseInt(result.age, 10)
        let message 

        message = (age >= 0 && age <= 99) ? 
            'You are born in ' + (2023 - age) : 
                "please input a number between 0 and 99"

        console.log(message)
    }
);