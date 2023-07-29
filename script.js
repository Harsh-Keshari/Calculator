const display = document.querySelector(".display");
const buttons= document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output = "";
// Define function to calculate based on button clicked.
const calculate=(btnValue) => {
    if (btnValue === "=" && output !==""){
        // If output has '%',replace with '/100' before evaluating.
        output = eval(output.replace("%","/100"));
    }
    else if(btnValue === "AC")
    {
        output ="";
    }
    else if(btnValue === "DEL")
    {
        //if DEL button is clicked,remove the last character from the output.
        output = output.toString().slice(0,-1);
    }
    else{
        //if output is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnValue)) return
        output += btnValue;
    }
    display.value =output;
};


//Add event listener to buttons,call calculate() on click.
buttons.forEach((button) => {
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));

});




































// let input = document.getElementById('call');
// let button = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if (e.target.innerHTMK == 'Ac'){
//             string = "";
//             input.value = string;
//         }
//         else if (e.target.innerHTMK == 'Del'){
//             string = string.substing(0,string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string
//         }

        
        
//     }
//     )
// })