export function alertPrompt(){
  alert(`Alert pressed!`);
}
export function confirmPrompt(){
  if(confirm("Do you confirm this?")){
    document.getElementById("result").innerText="Confirm result: true";
  }
  else{
    document.getElementById("result").innerText="Confirm result: false";
  }
}
export function promptNote(){
  const userName = prompt("What is your name?");
  if(userName){
    document.getElementById("result").innerText=`Prompt result: ${userName}`;
  }else{
    document.getElementById("result").innerText=`Prompt result: User didn't input anything`;
  }
}