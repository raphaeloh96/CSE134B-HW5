const alert = document.getElementById('alert');
const confirm = document.getElementById('confirm');
const prompt = document.getElementById('prompt');
const saferPrompt = document.getElementById('saferPrompt');
const result = document.getElementById('result');


function alertNote(){
  window.alert("Alert pressed!");
}
function confirmNote(){
  if(window.confirm("Do you confirm this?")){
    result.innerText = "The value returned by the confirm method is : true";
  }else{
    result.innerText = "The value returned by the confirm method is : false";
  }

}
function promptNote(){
  userName = window.prompt("What is your name?");
  if(userName){
    result.innerText = `Prompt result: ${userName}`;
  }else{
    result.innerText = `Prompt result: User didn't enter anything`;
  }
}

alert.addEventListener("click", alertNote);
confirm.addEventListener("click", confirmNote);
prompt.addEventListener("click", promptNote);
saferPrompt.addEventListener("click", promptNote);

