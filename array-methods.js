var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(item){
	el.innerHTML += item + " " 
})

// Use the map method to create a new array where the first letter of each planet is capitalized

var newPlanets = planets.map(function(item, index){
	return item.charAt(0).toUpperCase() + item.slice(1);
	
});


console.log("newPlanets", newPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'

var newPlanets = planets.filter(function(item){
	return item.includes("e");
});

console.log("newPlanets", newPlanets);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var newSentence = words.reduce(function(prev, curr){
	return prev +" " + curr;
})

console.log("newSentence", newSentence);