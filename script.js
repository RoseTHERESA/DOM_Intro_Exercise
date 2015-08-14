//tells js to wait until DOM is loaded to execute function
window.onload = function() {
	console.log("JavaScript is alive");
	document.getElementById("greeting").innerText = "Ciao, baby!";
	changeListItemsColor();
	addClickListenerToLi();
	addListenerToReset();
};


	function changeListItemsColor(){
		var listItems = document.querySelectorAll("li");
		for (var i = 0; i < listItems.length; i++) {
			listItems[i].style.backgroundColor = "PALETURQUOISE";
		}
	}

	function addClickListenerToLi(){
		var listItems = document.querySelectorAll("li");
		for (var i = 0; i < listItems.length; i++) {
			listItems[i].addEventListener("click", function(){
				console.log(this);
				this.classList.add("selected");
			});
		}
	}
	//clear the styling with the reset button
	function addListenerToReset(){
		var listItems = document.querySelectorAll("li");
		var button = document.getElementById("reset");
		button.addEventListener("click", function(){
			for (var i = 0; i < listItems.length; i++) {
				listItems[i].classList.remove("selected");
				listItems[i].style.backgroundColor = "";
			}
		});
	}

document.querySelector("img").getAttribute("src");
document.querySelector("img").setAttribute("src", what you set it to);


		//refactor the function:
		// function addClickListenerToLi(){
		// 	for (var i = 0; i < listItems.length; i++) {
		// 		listItems[i].addEventListener("click", clicked);
		// 	}
		// }

		// function clicked(){
		// 	console.log(this);
		// }

//The keyword "this" is always bound to the parent.


/*
document.querySelector(".selected");
//to be specific... selectors in correct order from parent to child to grandchild...
document.querySelector("#essentials ul .selected");


document.querySelector();
document.querySelectorAll();

document.getElementById();
document.getElementByTagName();
document.getElementsByClassName();

EVENT HANDLERS:

click handler
window.onclick = function(){
	console.log("FOO!!")
}
function window.onclick()

BETTER:

addEventListener is a very cool method

make a var that finds the element to be manipulated
i.,e.
var img = document.getElementById("hplogo")

then use addEventListener with the var
img.addEventListener("click", fucntion(){
	console.log("Foo!");
})

addEventListener works on only one element at a time

______.classList.add("____")


document.querySelector("img").getAttribute("src")
document.querySelector("img").setAttribute("src", what you set it to)


*/
