// Project Requirements :
// - Change the Background color by generating random rgb color by clicking a button

// steps 
//  Step 1 - create onload handler
window.onload = function(){
   main();
};
  
function main(){
  const root = document.getElementById('root');
  const btn = document.getElementById('change-btn');
  const output = document.getElementById('output');

  btn.addEventListener('click', function() {
   const bgColor = generateHexColor();
   root.style.backgroundColor = bgColor;
   output.value = bgColor;
  })
}

// step 2 random color generator function
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(15)}`
} 
// step 3 - collect all necessary references
  
// Step 4 - handle the click event  