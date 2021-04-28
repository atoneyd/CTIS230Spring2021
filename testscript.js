//Creates a new varibale called myItem that refers to element with the id "firsttest"
myitem = document.getElementById("firsttest");

//Gives myItem an event listener, saying something should happen(execute onClick function) when it is clicked("click")
myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseout", onMouseOut)

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