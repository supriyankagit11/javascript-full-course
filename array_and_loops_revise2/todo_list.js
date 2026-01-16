const todolist =['make dinner','wash hand'];

rendertodolist();
function rendertodolist(){
   let todolistHTML= '';

   for(let i=0; i<todolist.length;i++){
      const todo= todolist[i];
      const html= `<P>${todo}</p>`;
      todolistHTML+= html;//to combine all html
   }
   console.log(todolistHTML);
   document.querySelector('.js-todo-list').innerHTML= todolistHTML;
}


function addTodo(){
   const inputElement= document.querySelector('.js-name-input');
   const name = inputElement.value;
   //console.log(name);

   todolist.push(name);
   console.log(todolist);

   inputElement.value='';

   rendertodolist();
}