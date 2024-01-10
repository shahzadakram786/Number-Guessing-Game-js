let input  = document.getElementById("input");
let button = document.getElementById("button");


button.addEventListener('click',(e)=> {
    let a = parseInt(input.value);
    let GNum = 7 ;
  
    if(!isNaN(a) && a >= 1 && a <=20 ){
      
    }

  else if (isNaN(a) || a <=0 ) alert ("Please enter a valid number")
});