var inputField = $("input[type='text']");

//create a Todo
function addTodo(){
  var todoText = $(inputField).val();
  //create a new li and add to ul
  if (todoText!="") {
    $("ul").append("<li>"+todoText+" <span><i class='fa fa-trash-alt'></i></span></li>");
    //clear the input
    $(inputField).val("").css("border", '3px solid rgba(0, 0, 0, 0)');
  }
  else {
    //set a red border if it's empty
    $(inputField).css("border", '#FF0000 3px solid');
  }
}

//hit 'Enter' to create a Todo
$("input").keypress(function() {
    if (event.which == 13){
      addTodo();
    }
})

//or click on a plus icon to create a Todo
$(".fa-plus").on('click', function(){
  addTodo();
})

//check off specific lis by clicking
$("ul").on("click", "li", function(){//when 'li' is clicked inside of a 'ul'
  $(this).toggleClass('completed');//run this
})

//click on X to delete a Todo
$("ul").on('click', "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();//removes Todo after it fades out
  });
  event.stopPropagation();
})
