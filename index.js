
for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {

        var sound = this.innerHTML;

        if(sound === "w")
        {
            var audio1 = new Audio ("sounds/crash.mp3");
            audio1.play();
            
        }
        if(sound==="a")
        {
            var audio1 = new Audio ("sounds/kick-bass.mp3");
            audio1.play();
        }
        if(sound==="s")
        {
            var audio1 = new Audio ("sounds/snare.mp3");
            audio1.play();
        }
        if(sound==="d")
        {
            var audio1 = new Audio ("sounds/tom-1.mp3");
            audio1.play();
        }
        if(sound==="j")
        {
            var audio1 = new Audio ("sounds/tom-2.mp3");
            audio1.play();
        }
        if(sound==="k")
        {
            var audio1 = new Audio ("sounds/tom-3.mp3");
            audio1.play();
        }
        if(sound==="l")
        {
            var audio1 = new Audio ("sounds/tom-4.mp3");
            audio1.play();
        }
      
    });
    
}


