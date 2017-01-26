console.log("Hello")

function handleClick(){
  var newText = $("greeting").val();
  $(this).text("update");

}

$("#greeting").on('click', handleClick);


function BtnHover() {
  $(this).css({'background-color': 'red' });
}

function BtnExit() {
  $(this).css({'background-color': 'blue' });
}

$("#greeting").on('mouseover', BtnHover);
$("#greeting").on('mouseover', BtnExit);

var todos = [
  { id: Math.floor(Math.random()*100), title:"Get someone" , date:"01/2/18" },
  { id: Math.floor(Math.random()*100), title:"Find someone" , date:"01/3/18" },
  { id: Math.floor(Math.random()*100), title:"Meet someone" , date:"01/4/18" },
  { id: Math.floor(Math.random()*100), title:"Lose someone" , date:"01/5/18" },
];

var completedToDos = [];

function renderToDosToPage(arr) {
    for (var i = 0; i < arr.length; i++) {
        $("#todo-list").append('<tr> <td>' + arr[i].title + '</td> <td>' + arr[i].date +
        '</td> <td> <button id="'+arr[i].id +'" class="completeToDoBtn"> complete </button> </td>');

    }
}

renderToDosToPage(todos);

function markComplete(){

console.log("am I being called");

  $(this).closest('tr').remove();

  var id = $(this).attr('id');
  console.log(id);

  var toDone =todos.filter(function(item) {
    return item.id == id
  });

  addToCompleteList(toDone[0]);

}

function addToCompleteList(todo) {
  console.log(todo);

  $("#completedToDos").append('<tr id="' + todo.id +'"> <td>' + todo.title + '</td> <td>' + todo.date +
  '</td> <td> <button class="completeToDoBtn"> complete </button> </td>');
}


$(".completeToDoBtn").on('click', markComplete);


function createNewTodo(e){
  e.preventDefault();

  var title = $("#todoTitle").val();
  var date =$("#todoDate").val();
  var id = Math.floor(Math.random()*100);

  $("#todo-list").append('<tr id="' + id +'"> <td>' + title + '</td> <td>' + date +
  '</td> <td> <button class="completeToDoBtn"> complete </button> </td>');
}

$(".submitToDo").on('click', createNewTodo);
