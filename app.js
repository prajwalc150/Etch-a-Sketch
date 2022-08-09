const container = document.querySelector('#container');
n = 10000;

for(i = 0;i<n;i++){
   let content = document.createElement('div');
   //content.textContent = `${i}`;
   content.id = "test";
   container.appendChild(content);
}
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
  event.target.style.backgroundColor = `rgba(${getRndInteger(0,255)},${getRndInteger(0,255)},${getRndInteger(0,255)},${getRndInteger(1,1000)/1000})`;})

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

function getRndColour(){

}