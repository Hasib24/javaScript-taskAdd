console.log('JS connected');

var timeofClick = new Date;

var addBtn = document.querySelector('.button button');
var overlay = document.querySelector('.container_overlay');
var add_new_dialoge_box = document.querySelector('.add_new_dialoge_box');
var add_new_dialoge_box_header_cross = document.querySelector('.add_new_dialoge_box_header span:nth-child(2) img');
var inputBx = document.querySelector(".add_new_dialoge_box input[type='text']");
var addOkBtn = document.querySelector(".add_new_dialoge_box input[type='submit']");
let taskContainer = document.querySelector('.container');

// variable for action icons 
let action_squre_sign_Icon = document.querySelectorAll('.squre_sign_Icon');







// add new button  clicked
addBtn.addEventListener('click', ()=>{

    overlay.classList.toggle('overlay_active');
    console.log(' add button clicked');

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
    let sn = document.querySelectorAll('.task');


    // task div's child 
    let task_sn = document.createElement('div');
    let task_name = document.createElement('div');
    let task_date = document.createElement('div');
    let task_action = document.createElement('div');
    let action_sqr_icon = document.createElement('div');
    let action_edit_icon = document.createElement('div');
    let action_delete_icon = document.createElement('div');
    
    taskDiv.classList.add('task');
    task_sn.classList.add('serial');
    task_name.classList.add('task_name');
    task_date.classList.add('added_at');
    task_action.classList.add('action');
    action_sqr_icon.classList.add('squre_sign_Icon');
    action_edit_icon.classList.add('edite_icon');
    action_delete_icon.classList.add('delete_icon');

    action_delete_icon.setAttribute('onclick', 'deleteTask()')

    // serial wii be here 
    task_sn.innerText = sn.length+1;
    task_name.innerText = inputBx.value;
    task_date.innerText = getClickTime();
    


    taskDiv.append(task_sn);
    taskDiv.append(task_name);
    taskDiv.append(task_date);
    taskDiv.append(task_action);
     
    // inside task action 
    task_action.append(action_sqr_icon);
    task_action.append(action_edit_icon);
    task_action.append(action_delete_icon);
    
    taskContainer.append(taskDiv)




    inputBx.value ='';
    console.log(`task added`)

    
})



// date and time function 
function getClickTime(){
    let ntime = new Date;
    let yy = ntime.getFullYear(),
        mm = ntime.getMonth(),
        dd = ntime.getDate(),
        hhmmss = ntime.toLocaleTimeString();

    switch (mm) {
        case 0: mm = `January` ; break;
        case 1: mm = `February`; break;
        case 2: mm = `Martch`  ; break;
        case 3: mm = `April`   ; break;
        case 4: mm = `May`     ; break;
        case 5: mm = `June`    ; break;
        case 6: mm = `july`    ; break;
        case 7: mm = `August`  ;break;
        case 8: mm = `September`;break;
        case 9: mm = `October` ; break;      
        case 10:mm = `November`; break;
        case 11:mm = `December`; break;
    }
return `${dd} ${mm} ${yy}, ${hhmmss}`
}


function deleteTask(){
    action_delete_icon.parentElement.parentElement.remove();
}


// console.log(taskContainer);


    // for ( i = 0; i < action_squre_sign_Icon.length; i++) {
    //     const particular_squ_icon = action_squre_sign_Icon[i];
    //     particular_squ_icon.addEventListener('click', ()=>{
    //         particular_squ_icon.classList.toggle('write_sign_icon')
    //     })
    //     // console.log(particular_squ_icon);
    // }

