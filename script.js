const button = document.querySelectorAll("button");
const display = document.getElementById("ans");
button.forEach(btn=>btn.addEventListener("click",function(){
  display.append(btn.value);
  if (btn.value === 'clear'){
    display.innerHTML = " ";
  }
  
}))

function func(){
  const ans = display.innerHTML;
  const ansi = eval(ans);
  display.append(" = ");
  display.append(ansi);
}