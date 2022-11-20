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

// variable for delete dialogue box 
const delete_dialogue_bx = document.querySelector('.delete_dialoge_box');
// let delete_dia_bx_btn = delete_dialogue_bx.children;


// variable for edit dialogue box 

const edit_dialoge_box = document.querySelector('.edit_dialoge_box');






// add new button  clicked
addBtn.addEventListener('click', ()=>{
    overlay.classList.add('overlay_active');
    add_new_dialoge_box.classList.add('add_new_dialoge_box_active')

    console.log(' add button clicked');
})


// overlay activated 
overlay.addEventListener('click', ()=>{
    overlay.classList.remove('overlay_active');
    add_new_dialoge_box.classList.remove('add_new_dialoge_box_active')
    delete_dialogue_bx.classList.remove('delete_active');
    edit_dialoge_box.classList.remove('edit_active');


    console.log('overlay clicked')
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
    console.log(`task added`);


    alwaysRanForAction();   
})



// date and time function 
function getClickTime(){
    let ntime = new Date;
    let yy = ntime.getFullYear(),
        mm = ntime.getMonth(),
        dd = ntime.getDate(),
        hhmmss = ntime.toLocaleTimeString();

    switch (mm) {
        case 0: mm = `Jan` ; break;
        case 1: mm = `Feb`; break;
        case 2: mm = `Martch`  ; break;
        case 3: mm = `April`   ; break;
        case 4: mm = `May`     ; break;
        case 5: mm = `June`    ; break;
        case 6: mm = `july`    ; break;
        case 7: mm = `Aug`  ;break;
        case 8: mm = `Sep`;break;
        case 9: mm = `Oct` ; break;      
        case 10:mm = `Nov`; break;
        case 11:mm = `Dec`; break;
    }
return `${dd} ${mm} ${yy}, ${hhmmss}`
}




function alwaysRanForAction(){
    const deletButtons = document.querySelectorAll('.delete_icon');
    const editButtons = document.querySelectorAll('.edite_icon');

    deletButtons.forEach(function(button, islam, imran){
        button.addEventListener('click', ()=>{
            overlay.classList.add('overlay_active');
            delete_dialogue_bx.classList.add('delete_active');

            console.log(`delete button clicked`);

            forDeletDialogueBx(button);
            
        })
    })

    editButtons.forEach(function(editIcon){
        editIcon.addEventListener('click',()=>{
            overlay.classList.add('overlay_active');

            foEditDialogueBx(editIcon);
        })
    })
}

function forDeletDialogueBx(button){
    const delete_dialoge_box_button = document.querySelectorAll('.delete_dialoge_box_button button');

    delete_dialoge_box_button.forEach(function(btn){

        if(btn.classList.contains('yesBtn')){
            btn.addEventListener('click',()=>{
                console.log(`yes clicked`);
                // console.log(button.parentElement.parentElement)
                button.parentElement.parentElement.remove();


                overlay.classList.remove('overlay_active');

                delete_dialogue_bx.classList.remove('delete_active');


            })
            
        }else if(btn.classList.contains('noBtn')){

            btn.addEventListener('click', ()=>{
                console.log(`no btn clicked`);

                overlay.classList.remove('overlay_active');
                delete_dialogue_bx.classList.remove('delete_active');



            })

        }

        
    })

}




function foEditDialogueBx(editIcon){
    console.log(`Edite function callde`);
    const editable = edit_dialoge_box.children[1];
    const saveBtn = edit_dialoge_box.children[2];

    editable.value = editIcon.parentElement.previousSibling.previousSibling.innerText;

    edit_dialoge_box.classList.add('edit_active');
    
    saveBtn.addEventListener('click', ()=>{
        editIcon.parentElement.previousSibling.previousSibling.innerText = editable.value;
        console.log('save btn clicked');

        overlay.classList.remove('overlay_active');
        edit_dialoge_box.classList.remove('edit_active');




    })
    



}

