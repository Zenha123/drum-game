
var drumno=document.querySelectorAll(".drum").length;

 for ( let i=0;i<drumno;i++)
    {
    document.querySelectorAll(".drum")[i].addEventListener("click",disp);
        function disp() 
    { 
       var button=this.innerHTML;
       makeSound(button);
       animation(button);
    }
    }
    
    
    document.addEventListener("keypress",bay);
        function bay(event)
         {
           makeSound(event.key);
           animation(event.key);
         }
    
     
 
 function makeSound(key)
 {
    switch(key)
        {
            case "w":var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();

            break;

            case "a":var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "s":var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "d":var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

            case "j":var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;

            case "k":var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "l":var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            default:console.log(buttonInnerHTML);
        }
 }

    function animation(key)
{
  document.querySelector("."+key).classList.add("press");
  setTimeout(remove,100)

  function remove()
  {
    document.querySelector("."+key).classList.remove("press");
  }
}





    