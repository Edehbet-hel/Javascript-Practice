let onbutton = document.getElementById("onbutton");
let offbutton = document.getElementById("offbutton");
let bulb = document.querySelector("img")

onbutton.addEventListener('click',function(){
    console.log(onbutton);
    bulb.setAttribute("src", "lighton.png")
});

offbutton.addEventListener('click',function(){
    console.log(offbutton);
    bulb.setAttribute("src", "lightoff.png")
});

