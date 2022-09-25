// 1: Create a container to house your div (COMPLETE)
// 2: Input manually divs to style them so that they will create a grid format (COMPLETE)
// 3: Once styled, remove the manual divs and try to create divs through JS to match the amount we added manually. (COMPLETE)
//      a: the value of grid will be used to find grid x grid value
// 4: Once complete, this will be the default grid we start with, now make it so that the user can change the amount of grids with the button click that should open a prompt
// 5: When we hover over a div, the background color should change to black from the default white and stay black when we leave it.
// 6: Make the colors random when we hover over them.
// 7: Make it so the colors become darker over each pass with retaining that random color.
let container = document.querySelector(".container")
let btn = document.querySelector(".btn__newGrid")
let userInputGrid = 6;
let amountOfDivsToCreate = userInputGrid * userInputGrid;
let createdDivs = 0;


for(let i = 0; i < amountOfDivsToCreate;i++){
createdDivs = document.createElement("div")
container.appendChild(createdDivs)
}

container.style.cssText = `grid-template-columns: repeat(${userInputGrid},1fr);`