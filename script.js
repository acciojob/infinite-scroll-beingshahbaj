//your code here!
const scrollContainer = document.getElementById("infi-list");
let count =1;
for(; count<=10; count++) {
  const li = document.createElement("li");
  li.textContent = `item `;
  li.className = "item";
  scrollContainer.appendChild(li);
};

scrollContainer.addEventListener("scroll" ,()=>{
  let scrollHeight = scrollContainer.scrollTop;
  let scrolableHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
  if(scrolableHeight - scrollHeight <= 5){
    addTwoMore();
  }
});

function addTwoMore(){
  for(let i = count; i<=count+2; i++){
    const li = document.createElement("li");
    li.textContent = ` item`;
    li.className = "item";
    scrollContainer.appendChild(li);
  
  }
}
