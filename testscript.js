//Creates a new varibale called myItem that refers to element with the id "firsttest"
myitem = document.getElementById("firsttest");

thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
thebutton2 = document.getElementById("thebutton2");  
otheritem2 = document.getElementById("buttontest2");
textentry = document.getElementById("myinput");
thebutton3 = document.getElementById("thebutton3");
thebutton4 = document.getElementById("thebutton4");

//Gives myItem an event listener, saying something should happen(execute onClick function) when it is clicked("click")
myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseout", onMouseOut)

thebutton.addEventListener("click", onButtonClick);
thebutton2.addEventListener("click", onButtonClick2);
textentry.addEventListener("change", onChange);
thebutton3.addEventListener("click", onButtonClick3);
thebutton4.addEventListener("click", onButtonClick4);

//Tells myItem what to do when its clicked(change text color to green)
function onClick() { //function to be executed when item is clicked
    myitem.style.color = "green"; //changes text color to green
    myitem.style.backgroundColor = "aliceblue"; //changes background color to blue
    myitem.style.borderStyle = "dashed"; //adds border
}
function onMouseOut() {
    myitem.style.color = "darkslateblue"; 
    myitem.style.backgroundColor = "seashell"; 
    myitem.style.borderStyle = "none"; 
}
function onButtonClick() {  
    otheritem.style.color = "red";  
}
function onButtonClick2() {  
    otheritem2.style.backgroundColor = "lightgrey";  
}
function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}
function onButtonClick3() {  
    otheritem.style.color = "darkslateblue";  
}
function onButtonClick4() {  
    otheritem2.style.backgroundColor = "seashell";  
}
  
