import prompt from "prompt"

prompt.start();

  prompt.get(
    [{name : "age", message : "enter your age"}],
    (err, result) => {

        console.log('You are born in ' + (2023 - parseInt(result.age,10)));
    }
);