const todolist =[{
    name:'make dinner',
    duedate:'2022-12-22'
    },{
    name:'wash dishes',
    duedate:'2022-12-30'
}];

rendertodolist();

function rendertodolist(){
   let todolistHTML= '';

   for(let i=0; i<todolist.length;i++){
      const todoObject= todolist[i];
      //const name = todoObject.name;
      //const duedate= todoObject.duedate();
      const { name, duedate } = todoObject;

      const html= `
      <div>${name}</div>
      <div> ${duedate}</div>
      <button onclick="
      todolist.splice(${i}, 1);
      rendertodolist();
      " class="delete-todo-button">Delete</button>     
      `;
      todolistHTML+= html;//to combine all html
   }
   //console.log(todolistHTML);
   document.querySelector('.js-todo-list').innerHTML= todolistHTML;
}


function addTodo(){
   const inputElement= document.querySelector('.js-name-input');
   const name = inputElement.value;
   //console.log(name);

   const dateInputElement = document.querySelector('.js-due-date-input');
   const duedate= dateInputElement.value;

   todolist.push(
    {name,
     duedate
    });

   //console.log(todolist);

   inputElement.value='';

   rendertodolist();
}
