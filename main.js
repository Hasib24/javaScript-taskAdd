console.log('JS connected');

var timeofClick = new Date;

var addBtn = document.querySelector('.button button');
var overlay = document.querySelector('.container_overlay');
var add_new_dialoge_box = document.querySelector('.add_new_dialoge_box');
var add_new_dialoge_box_header_cross = document.querySelector('.add_new_dialoge_box_header span:nth-child(2) img');
var inputBx = document.querySelector(".add_new_dialoge_box input[type='text']");
var addOkBtn = document.querySelector(".add_new_dialoge_box input[type='submit']");



let taskContainer = document.querySelector('.container');



// add new button  clicked
addBtn.addEventListener('click', ()=>{

    overlay.classList.toggle('overlay_active');
    console.log('button clicked');

    add_new_dialoge_box.classList.toggle('add_new_dialoge_box_active')
})



overlay.addEventListener('click', ()=>{
    overlay.classList.toggle('overlay_active');
    add_new_dialoge_box.classList.toggle('add_new_dialoge_box_active')

})


// add new task dailogue box 

add_new_dialoge_box_header_cross.addEventListener('click', ()=>{
    add_new_dialoge_box.classList.toggle('add_new_dialoge_box_active');
    overlay.classList.toggle('overlay_active');

    console.log('cross clicked')
})


// In add new dailogue box add button clicked

addOkBtn.addEventListener('click', ()=>{

    // task parent 
    let taskDiv = document.createElement('div');


    // task div's child 
    let task_sn = document.createElement('div');
    let task_name = document.createElement('div');
    let task_date = document.createElement('div');
    let task_action = document.createElement('div');
    
    taskDiv.classList.add('task');

    task_sn.classList.add('serial');
    task_name.classList.add('task_name');
    task_date.classList.add('added_at');
    task_action.classList.add('action');

    // serial wii be here 
    task_name.innerText = inputBx.value;
    task_date.innerText = `${timeofClick.getDate()} `;
    


    taskDiv.append(task_sn);
    taskDiv.append(task_name);
    taskDiv.append(task_date);
    taskDiv.append(task_action);
    
    taskContainer.append(taskDiv)




    inputBx.value ='';
})


console.log(taskContainer);