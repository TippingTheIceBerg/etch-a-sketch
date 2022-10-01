// 1: Create a container to house your div (COMPLETE)

// 2: Input manual divs to style them so that they will create a grid format (COMPLETE)

// 3: Once styled, remove the manual divs and try to create divs through JS to match the amount we added manually. (COMPLETE)
//      a: the value of grid will be used to find grid x grid value

// 4: Once complete, this will be the default grid we start with, now make it so that the user can change the amount of grids with the button click that should open a prompt (COMPLETE)
//      a: newly created divs are added onto previous created ones, old ones need to be removed before new ones are added.

// 5: When we hover over a div, the background color should change to black from the default white and stay black when we leave it.(COMPLETE)

// 6: Make the colors random when we hover over them. 
//      a: colors must retain their original color and do not change over each re-hover.

// 7: Make it so the colors become darker over each pass with retaining that random color.

let container = document.querySelector(".container")
let btn = document.querySelector(".btn__newGrid")
let userInputGrid = 6;
let numOfDivsToCreate = userInputGrid * userInputGrid;
let containerCreatedDivs = 0;



for(let i = 0; i < numOfDivsToCreate; i++){
containerCreatedDivs = document.createElement("div")
containerCreatedDivs.style.cssText = ""
container.appendChild(containerCreatedDivs)
}

container.style.cssText = `grid-template-columns: repeat(${userInputGrid},1fr);`

btn.addEventListener("click",() =>{
    // container.replaceChildren is the fastest way to clear children and add news ones, in this case, we just wanted to remove.

userInputGrid =  prompt("Enter your desired x by x grid");
if(userInputGrid > 30){
    alert("Sorry, the value must be 30 or below");
    return;
}
container.replaceChildren();
calcsNumOfDivsToMake(userInputGrid);
createAndAppendsDivs();
hoverGrid = document.querySelectorAll("div");

})




function calcsNumOfDivsToMake(userInputGrid){
    numOfDivsToCreate = userInputGrid * userInputGrid;
    container.style.cssText = `grid-template-columns: repeat(${userInputGrid},1fr);`

}
function createAndAppendsDivs(){
    for(let i = 0; i < numOfDivsToCreate; i++){
        containerCreatedDivs = document.createElement("div")
        container.appendChild(containerCreatedDivs)
        getDivs = document.querySelectorAll("div");
        

        getDivs.forEach(e =>{
            let att = e.getAttribute('style')
    

                e.addEventListener("mouseover", ()=>{
                    randomColor1 = Math.floor(Math.random()*365)
                    randomColor2 = Math.floor(Math.random()*365)
                    randomColor3 = Math.floor(Math.random()*365)
                    if(e.style.backgroundColor){
                    return;
                    }
                    e.style.cssText =  `background-color: rgb(${randomColor1},${randomColor2},${randomColor3})`
                })
            
        })
        }
}

let getDivs = document.querySelectorAll("div");

getDivs.forEach(e =>{
    e.addEventListener("mouseover", ()=>{
        let randomColor1 = Math.floor(Math.random()*365)
        let randomColor2 = Math.floor(Math.random()*365)
        let randomColor3 = Math.floor(Math.random()*365)
        if(e.style.backgroundColor){
            return;
            }
        e.style.cssText =  `background-color: rgb(${randomColor1},${randomColor2},${randomColor3})`
    })
})

