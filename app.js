const container = document.querySelector('#container');

//n = 16;

//try querySelectorAll for changing bground in future 
// instead of giving each element an id

generateBoard(5);
function generateBoard(n){
  for(i = 0;i<n;i++){
    m = 800/n;
    let content = document.createElement('div');
    //content.textContent = ` ${i}i `;
    content.id = `test${i}`;
    content.classList.add("test");
    container.appendChild(content);
    document.getElementById(`test${i}`).style.height = `${m}px`;
    //console.log(i);
    for( j = 0;j<n;j++){
      const container2 = document.querySelector(`#test${i}`);
      let content2 = document.createElement('div');
      //content2.textContent = ` ${j}j `;
      content2.id= `jest${i},${j}`;
      content2.classList.add("jest");
      content2.style.opacity = 0.1;  
      container2.appendChild(content2);
      document.getElementById(`jest${i},${j}`).style.width = `${m}px`;
      
    } 
  }
}

function clearBoard(){
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}
//document.getElementById(`test${n}`).style.bottom = 0;
//document.getElementsByClassName("jest").style.width = `${m}px`;
const test = document.getElementById("container");
/*
// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", (event) => {
  // highlight the mouseenter target
  event.target.style.color = "red";

  
  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 500);
}, false);
*/
// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", (event) => {
  // highlight the mouseover target
  
  
  event.target.style.backgroundColor = "black";
  temp = event.target.style.opacity;
  console.log(typeof(temp));
  //tempOpacity.slice(0, tempOpacity.length - 1);
  console.log("okay",(parseInt(temp[temp.length - 1])+1)/10);
  temp = (parseInt(temp[temp.length - 1])+1)/10;
  temp = `${temp}`;
  if(temp != 1)
  {event.target.style.opacity = temp;}
  console.log("okay2",typeof(temp));
})

 /* 
  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.backgroundColor = "";
  }, 500);
}, false);

*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*

maybe some other day
function resetBoard(){
  //container.style.backgroundColor = "black";
  let board = document.querySelectorAll('.jest');
  //console.log(board);
  board.style.backgroundColor = "orange";
  //board.style.backgroundColor = "orange";
}*/

function setCells(){

  let cellAmount = prompt("Please enter number of cells on each edge", "1 to 100");
  if (0<cellAmount<100){
    clearBoard();
    generateBoard(cellAmount);
  }
}

function changeOpacity(){
document.getElementById("container").style.opacity = 0.5;
let trial = document.getElementById("container").style.opacity;
console.log(trial);
}


/*console.log("bruh");
console.log(container.getAttribute("background-color"));
console.log("bruh2");
console.log(getComputedStyle(container,background-color));*/
