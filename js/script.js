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

//hit 'Enter' to create a Todo
$("input[type='text']").on('keypress', function(event){
  if(event.which === 13){
    //grabbing new Todo text from input
    var todoText = $(this).val();
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> "+todoText+"</li>");
    //clear the input
    $(this).val("");
  }
})

//click on a plus icon to fade in/out the input form
$(".fa-plus").on('click', function(){
  $("input[type='text']").fadeToggle();
})
