console.log("array methods javascript")

const test = "who?"


function planetStuff(planet) {
    planetEl.innerHTML += `<h2>Planet Name ${planet}</h2>`
}
planets.forEach(planetStuff) 

function turnUpper(value) {
    value.toUpperCase();
    
}

//Okay the string is just a taco, obviously.  The imporant thing is the RETURN because you need it to produce something you can print.

function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
    //Fun fact.  Strings are basically at arrays to you can pull from them in a similar way.  That's charAt is pulling zero to get the first character.  It then combines it with the rest of the string at the second character.
}

newArray = planets.map(jsUcfirst);
//With map you can totally leave out the value because it will automatically stick it in where the () would go.  DOn't put the () or it won't work.

console.log(newArray)

function whereTHeEsAt(strings) {
    return strings.includes("e");
}

let eEeEe = planets.filter(whereTHeEsAt);
console.log(eEeEe);
//Doesn't automatically check if capitalized or not.

let capitalE = newArray.filter(whereTHeEsAt);
console.log(capitalE);