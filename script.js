let task = document.getElementById('task');
let item = document.getElementById('item');

let test = [];
let i = 0;
function add(){
  let test2 = {
    task : task.value
  }
  test.push(test2.task);
  
    item.innerHTML += `
    <div class="task_item">       
    <h4>${test[i++]}</h4>
      <div>
       <button onclick="done(${i})" id="done">Done</button>
       <button onclick ="del(${i})" id="delete">Delete</button> 
      </div> 
      </div>
 `
if(test.length > 0){
  
  console.log(test.slice(0, test.length))
}
}
function done(i){
  let task = document.querySelector(`.task_item:nth-child(${i})`);
  task.style.textDecoration = 'line-through';
  task.style.fontStyle = 'italic';
}

function del(i){
  let task = document.querySelector(`.task_item:nth-child(${i})`);
  task.style.display = "none";
}

/*
item.innerHTML = `
<h4>${test[i]}</h4>
<div>
     <button id="done">Done</button>
     <button id="delete">Delete</button> 
</div> 
`

*/