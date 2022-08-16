const container = document.querySelector('#container');

n = 16;
m = 800/n;

for(i = 0;i<n;i++){
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
    container2.appendChild(content2);
    document.getElementById(`jest${i},${j}`).style.width = `${m}px`;  
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
  event.target.style.backgroundColor = "orange";})

 /* 
  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.backgroundColor = "";
  }, 500);
}, false);

*/