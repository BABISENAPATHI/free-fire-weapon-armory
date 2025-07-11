// detecting the clicked key 

var numberOfButtons = document.querySelectorAll(".gun").length;
for(var i = 0; i<numberOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
      var buttonLetter = this.innerHTML.toLowerCase();
      gunSound(buttonLetter);
     makeAnimation(buttonLetter);
    })
}
document.addEventListener("keypress",function(event){
    gunSound(event.key);
    makeAnimation(event.key)

})


function gunSound(key){
    switch (key) {
        case "w":
            var ak47 = new Audio("sounds/ak47_ff.mp3");
            ak47.play();
            break;

            case "a" :
            var mp40 = new Audio("sounds/mp40_ff.mp3");
            mp40.play();
            break;

            case "s": 
            var ump = new Audio("sounds/ump_ff.mp3");
            ump.play();
            break;

            case "d":
             var m1887 = new Audio("sounds/m1887_ff.mp3");
            m1887.play();  
            break;

            case "f":
            var desert = new Audio("sounds/desert_ff.mp3");
            desert.play();  
            break;

            case "j":
            var awm = new Audio("sounds/awm_ff.mp3");
            awm.play();
            break;

            case "k":
            var scar = new Audio("sounds/scar_ff.mp3");
            scar.play();
            break;

            case "l":
            var m1014 = new Audio("sounds/m1014_ff.mp3");
            m1014.play();
            break;
    
        default:
            console.log("No sound mapped for:", key);
            break;
    }
    
}function makeAnimation(currentkey){
        var activekey = document.querySelector("."+currentkey);
        activekey.classList.add("pressed");
        setTimeout(function(){
            activekey.classList.remove("pressed")
        },100);

        
    }