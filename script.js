// 1: Create a container to house your div (COMPLETE)

// 2: Input manual divs to style them so that they will create a grid format (COMPLETE)

// 3: Once styled, remove the manual divs and try to create divs through JS to match the amount we added manually. (COMPLETE)
//      a: the value of grid will be used to find grid x grid value

// 4: Once complete, this will be the default grid we start with, now make it so that the user can change the amount of grids with the button click that should open a prompt (COMPLETE)
//      a: newly created divs are added onto previous created ones, old ones need to be removed before new ones are added.
//      b: grids greater than/around 30 cause delay, when changing, fix this. (IN PROGRESS) 

// 5: When we hover over a div, the background color should change to black from the default white and stay black when we leave it.(COMPLETE)

// 6: Make the colors random when we hover over them. 
//      a: colors must retain their original color and do not change over each re-hover. (COMPLETE)


// 7: Make it so the colors become darker over each pass with retaining that random color. (IN PROGRESS)
//      a: get the opacity of whatever the div is and increase it by a set value
//      b: make sure the added values are only applied to each div uniquely, if div 1 is entered three times it should be .3, enter div 2 only once, opacity should be .1

let container = document.querySelector(".container")
let btn = document.querySelector(".btn__newGrid")
let userInputGrid = 6;
let numOfDivsToCreate = userInputGrid * userInputGrid;
let containerCreatedDivs = 0;
let opacity = .1;



for(let i = 0; i < numOfDivsToCreate; i++){
containerCreatedDivs = document.createElement("div")
containerCreatedDivs.style.cssText = ""
container.appendChild(containerCreatedDivs)
}

container.style.cssText = `grid-template-columns: repeat(${userInputGrid},1fr);`

btn.addEventListener("click",() =>{
    
    userInputGrid =  prompt("Enter your desired x by x grid");
    if(userInputGrid > 100){
        alert("Sorry, the value must be 100 or below");
        return;
    }
    container.replaceChildren();
    // container.replaceChildren is the fastest way to clear children and add news ones, in this case, we just wanted to remove. Speed of this and innerHTML make no difference, leave as is.
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
        getDivs = document.querySelectorAll("div");
        

        
        }
        // fixed issue with lag, this callback was placed within for the for loop, causing it to be ran more times than necessary, solution, move it outside the for loop.
        getDivs.forEach(e =>
    
            e.addEventListener("mouseover", ()=>{
                if(e.style.opacity < 1){
                    e.style.opacity = `${+e.style.opacity + .1}`
                }
                if(e.style.backgroundColor){
                return;
                }
                randomColor1 = Math.floor(Math.random()*365)
                 randomColor2 = Math.floor(Math.random()*365)
                randomColor3 = Math.floor(Math.random()*365)
                e.style.cssText =  `background-color: rgb(${randomColor1} ${randomColor2} ${randomColor3});opacity:${opacity}`
                
            })
        
    )
}

let getDivs = document.querySelectorAll("div");

getDivs.forEach(e =>{
    e.addEventListener("mouseover", ()=>{
        let randomColor1 = Math.floor(Math.random()*365)
        let randomColor2 = Math.floor(Math.random()*365)
        let randomColor3 = Math.floor(Math.random()*365)
        if(e.style.opacity < 1){
            e.style.opacity = `${+e.style.opacity + .1}`
        }
        if(e.style.backgroundColor){
            return;
            }
        e.style.cssText =  `background-color: rgb(${randomColor1},${randomColor2},${randomColor3}); opacity:${opacity};`
    })
})

