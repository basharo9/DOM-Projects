// Project Requirements :
// - Change the Background color by generating random rgb color by clicking a button

// steps 
//  Step 1 - create onload handler
window.onload = function(){
   main();
};
  
function main(){
  const root = document.getElementById('root');
  const output = document.getElementById('output');
  const changeBtn = document.getElementById('change-btn');
  const copyBtn = document.getElementById('copyB'); //step 5

  changeBtn.addEventListener('click', function() {
   const bgColor = generateHexColor();
   root.style.backgroundColor = bgColor;
   output.value = bgColor;
  })

  copyBtn.addEventListener('click', function() {
   navigator.clipboard.writeText(output.value);
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

// Step 5 - Handel the copy Button click event
