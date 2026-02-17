const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
function addTask(){
    if(inputBox.value==''){
        alert("Please enter something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        inputBox.value="";
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);  
    }
    saveData();
}
listContainer.addEventListener("click", function (e) {
  const item = e.target.closest("li");
  if (!item) return;

  if (e.target.tagName === "SPAN") {
    item.remove();
    saveData();
  } else {
    item.classList.toggle("checked");
    saveData();
  }
});
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();