const input  = document.getElementById("input")
const button = document.getElementById("button")
const output = document.getElementById("h4")
const canvas = document.getElementById("confetti")

let jsConfetti = new JSConfetti;

button.addEventListener('click',() =>{
    let a = parseInt(input.value);
    let b = 7 ;
    if(a === b ){

        // console.log("Congratulation you have selected the right number")
        let result = number(a);
        jsConfetti.addConfetti();
        output.innerHTML= "Congratulations you have selected the right Number";
        output.style.color="yellow";
        
        

    }
    else{
        // console.log('soory you should Try again')
        output.innerHTML="Sorry, that was incorrect.";
        output.style.color = "red";
    }
    // if(!isNaN(a) && a >= 1 && a <=20  ){
    //   output.innerHTML = "you "
    // }

//   else if (isNaN(a) || a <=0 ) alert ("Please enter a valid number")
});
function number(a){
    return a
}