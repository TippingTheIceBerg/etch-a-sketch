// 1: Create a container to house your div (COMPLETE)

// 2: Input manual divs to style them so that they will create a grid format (COMPLETE)

// 3: Once styled, remove the manual divs and try to create divs through JS to match the amount we added manually. (COMPLETE)
//      a: the value of grid will be used to find grid x grid value

// 4: Once complete, this will be the default grid we start with, now make it so that the user can change the amount of grids with the button click that should open a prompt (COMPLETE)
//      a: newly created divs are added onto previous created ones, old ones need to be removed before new ones are added.

// 5: When we hover over a div, the background color should change to black from the default white and stay black when we leave it.

// 6: Make the colors random when we hover over them.

// 7: Make it so the colors become darker over each pass with retaining that random color.

let container = document.querySelector(".container")
let btn = document.querySelector(".btn__newGrid")
let userInputGrid = 6;
let numOfDivsToCreate = userInputGrid * userInputGrid;
let containerCreatedDivs = 0;


for(let i = 0; i < numOfDivsToCreate; i++){
containerCreatedDivs = document.createElement("div")
container.appendChild(containerCreatedDivs)
}

container.style.cssText = `grid-template-columns: repeat(${userInputGrid},1fr);`

btn.addEventListener("click",() =>{
    // container.replaceChildren is the fastest way to clear children and add news ones, in this case, we just wanted to remove.
container.replaceChildren();
userInputGrid =  prompt("Enter your desired x by x grid");
calcsNumOfDivsToMake(userInputGrid);
createAndAppendsDivs();
})



function calcsNumOfDivsToMake(userInputGrid){
    numOfDivsToCreate = userInputGrid * userInputGrid;
    container.style.cssText = `grid-template-columns: repeat(${userInputGrid},1fr);`

}
function createAndAppendsDivs(){
    for(let i = 0; i < numOfDivsToCreate; i++){
        containerCreatedDivs = document.createElement("div")
        container.appendChild(containerCreatedDivs)

        }
}