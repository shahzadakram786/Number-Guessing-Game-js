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

    else if(isNaN(a)){
        output.innerHTML = "the data type you entered is wrong ";
        output.style.color= "red";asd
        output.style.textShadow= "15px 25px 10px black";
        console.log("cliked")

    }

    else if(a += !isNaN(a)){
        output.innerHTML = "dont add the number with sitring write just number ";
        output.style.color= "red";
        output.style.textShadow= "15px 25px 10px black";
        console.log("cliked")

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